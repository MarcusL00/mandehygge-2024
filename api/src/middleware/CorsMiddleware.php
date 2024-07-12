<?php

namespace MandeHyggeApi\Middleware;

class CorsMiddleware
{
    const ALLOWED_HEADERS = "POST, OPTIONS";

    private static $instance = null;

    private function __construct()
    {
        // Private constructor, due to using singleton pattern. Prevents creating new instances of the class.
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new CorsMiddleware();
        }
        return self::$instance;
    }

    public function validateCors()
    {
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
        $requestMethod = $_SERVER['REQUEST_METHOD'] ?? '';
        $requestHeaders = $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'] ?? '';

        if (!empty($origin)) {
            header("Access-Control-Allow-Origin: {$origin}");
            header("Access-Control-Allow-Credentials: true");
            header("Access-Control-Max-Age: 86400");
            header("Access-Control-Allow-Methods: " . self::ALLOWED_HEADERS);
            header("Access-Control-Allow-Headers: Content-Type, Authorization");
        }

        if ($requestMethod == 'OPTIONS') {
            if (!empty($requestMethod)) {
                header("Access-Control-Allow-Methods: " . self::ALLOWED_HEADERS);
            }
            if (!empty($requestHeaders)) {
                header("Access-Control-Allow-Headers: {$requestHeaders}");
            }
            http_response_code(200);
            exit;
        }
    }
}
