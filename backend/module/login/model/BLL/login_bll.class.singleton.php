<?php
class login_bll
{
	private $dao;
	private $db;
	static $_instance;

	function __construct(){
		$this->dao = login_dao::getInstance();
		$this->db = db::getInstance();
	}

	public static function getInstance()
	{
		if (!(self::$_instance instanceof self)) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	public function get_register_BLL($args){

		$username = $args[0];
		$password = $args[1];
		$email = $args[2];

		$exist_user_email =  $this->dao->select_email($this->db, $email);
		$exist_user_username =  $this->dao->select_user($this->db, $username);

		if (!$exist_user_email  && !$exist_user_username) {
			$hashed_pass = password_hash($password, PASSWORD_DEFAULT, ['cost' => 12]);
			$hashavatar = md5(strtolower(trim($email)));
			$avatar = "https://i.pravatar.cc/500?u=$hashavatar";
			$email_token = common::generate_Token_secure(20);
			$id_user = common::generate_Token_secure(6);
			$rdo =  $this->dao->insert_user($this->db, $id_user, $username, $hashed_pass, $email, $email_token, $avatar);
			if ($rdo) {
				$message = [
					'type' => 'validate',
					'token' => $email_token,
					'toEmail' => $email
				];
				$email = json_decode(mail::send_email($message), true);
				if ($email) {
					return "ok";
				}
			}
		} elseif ($exist_user_email) {
			return "error_email";
		} elseif ($exist_user_username) {
			return "error_user";
		}
	}

	public function get_verify_email_BLL($token_email){
		$veryfy_email = $this->dao->select_verify_email($this->db, $token_email);
		if ($veryfy_email[0]['active'] == "0") {
			$update_active = $this->dao->update_active_email($this->db, $token_email);
			return "Vrification_ok";
		} else {
			return "Vrification_ok";
		}
	}

	public function get_login_BLL($args){
		$useraname = $args[0];
		$password = $args[1];
		$exist_user =  $this->dao->select_user($this->db, $useraname);

		if (!$exist_user) {
			return "error_user";
		} else {
			$user_active = $exist_user[0]['active'];
			if ($user_active == "0") {
				return "error_actiavate";
			} else {
				if (password_verify($password, $exist_user[0]['password'])) {
					$token = middleware::create_token($exist_user[0]["username"]);
					$_SESSION['username'] = $exist_user[0]['username']; //Guardamos el usario 
					$_SESSION['tiempo'] = time(); //Guardamos el tiempo que se logea
					return $token;
				} else {
					return "error_passwd";
				}
			}
		}
	}

	public function get_send_recover_email_BLL($args){
		$email = $args[0];
		$opc_passwd = $args[1];
		$provider_user = $this->dao->select_provider_user($this->db, $email)[0]['provider'];
		if ($provider_user != "google.com" && $provider_user != "github.com") {
			$exite_email = $this->dao->select_email($this->db, $email);
			$token = common::generate_Token_secure(20);
		} else {
			return "email_social_login";
		}

		if (!empty($exite_email)) {
			$update = $this->dao->update_recover_password($this->db, $email, $token);
			if ($update) {
				if ($opc_passwd == "recover") {
					$message = [
						'type' => 'recover',
						'token' => $token,
						'toEmail' => $email
					];
				} elseif ($opc_passwd == "modificate") {
					$message = [
						'type' => 'modificate',
						'token' => $token,
						'toEmail' => $email
					];
				}
				$email = json_decode(mail::send_email($message), true);
				if (!empty($email)) {
					return $token;
				}
			}
		} else {
			return 'error_email';
		}
	}

	public function get_verify_email_token_BLL($token_email){
		if ($this->dao->select_verify_email($this->db, $token_email)) {
			return 'correctly_email';
		} else {
			return 'error_email';
		}
	}

	public function get_send_new_passwd_modificate_BLL($args){
		
		$email_token = $args[0];
		$old_passwd = $args[1];
		$new_passwd = password_hash($args[2], PASSWORD_DEFAULT, ['cost' => 12]);

		$passwd_user = $this->dao->select_old_passwd_email_token($this->db, $email_token);

		if (password_verify($old_passwd, $passwd_user[0]['password'])) {
			if ($this->dao->update_new_passwd_email($this->db, $email_token, $new_passwd)) {
				return 'correctly_update';
			}
		} else {
			return 'error_old_passwd';
		}
	}

	public function get_send_new_passwd_recover_BLL($args){
		$email_token = $args[0];
		$new_passwd = password_hash($args[1], PASSWORD_DEFAULT, ['cost' => 12]);

		if ($this->dao->update_new_passwd_email($this->db, $email_token, $new_passwd)) {
			return 'correctly_update';
		}
	}

	public function get_social_login_BLL($args){
		$id = $args[0];
		$username = $args[1];
		$email = $args[2];
		$avatar = $args[3];
		$provider = $args[4];
		$email_token = common::generate_Token_secure(20);

		$exist_user_email =  $this->dao->select_email($this->db, $email);
		$exist_user_username =  $this->dao->select_user($this->db, $username);

		if (!$exist_user_email  && !$exist_user_username) {
			$correct_insert = $this->dao->insert_user_social_login($this->db, $id, $username, $email, $email_token, $avatar, $provider);
			if ($correct_insert == false) {
				return "error insert";
			} else {
				$message = [
					'type' => 'registration_notice',
					'token' => $email_token,
					'toEmail' => $email
				];
				$email = json_decode(mail::send_email($message), true);
				if ($email) {
					$_SESSION['username'] = $username;
					$_SESSION['tiempo'] = time();
					return middleware::create_token($username);
				}
			}
		} else {
			$_SESSION['username'] = $username;
			$_SESSION['tiempo'] = time();
			return middleware::create_token($username);
		}
	}

	public function get_logout_BLL(){
		unset($_SESSION['username']);
		unset($_SESSION['tiempo']);
		session_destroy();
		return "Done";
	}

	public function get_data_user_BLL($token){
		if (str_contains($token, '"')) {
			$token = substr($token, 1, -1);
		}
		$json = middleware::descode_token($token);
		return $this->dao->select_data_user($this->db, $json['username']);
	}

	public function get_actividad_BLL(){
		if (!isset($_SESSION["tiempo"])) {
			return "inactivo";
		} else {
			if ((time() - $_SESSION["tiempo"]) >= 1800) { //1800s=30min
				return "inactivo";
			} else {
				return "activo";
			}
		}
	}

	public function get_controluser_BLL($token){
		$token_dec = middleware::descode_token($token);
		if ($token_dec['exp'] < time()) {
			return "Wrong_User";
		}

		if (isset($_SESSION['username']) && ($_SESSION['username']) == $token_dec['username']) {
			return "Correct_User";
		} else {
			return "Wrong_User";
		}
	}

	public function get_refresh_token_BLL($token){
		$old_token = middleware::descode_token($token);
		if ($old_token) {
			$new_token = middleware::create_token($old_token['username']);
			return $new_token;
		} else {
			return 'error';
		}
	}

	public function get_refresh_cookie_BLL(){
		session_regenerate_id();
		return "Done";
	}
}
