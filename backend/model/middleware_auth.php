<?php
require_once(MODEL_PATH . 'JWT.php');
class middleware {
    public static function descode_token($token){

        $jwt = parse_ini_file(MODEL_PATH . 'jwt.ini');
        $secret = $jwt['secret'];

        $JWT = new JWT;
        $token_dec = $JWT->decode($token, $secret);
        $rt_token = json_decode($token_dec, TRUE);
        return $rt_token;
    }

    public static function create_token($username){
        $jwt = parse_ini_file(MODEL_PATH . 'jwt.ini');
        $header = $jwt['header'];
        $secret = $jwt['secret'];
        $payload = '{"iat":"' . time() . '","exp":"' . time() + (600) . '","username":"' . $username . '"}';

        $JWT = new JWT;
        $token = $JWT->encode($header, $payload, $secret);

        return $token;
    }

}