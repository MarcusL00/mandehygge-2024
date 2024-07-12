<?php

namespace MandeHyggeApi\Utils;

class Constants
{
    private static $instance = null;

    private function __construct()
    {
        // Private constructor, due to using singleton pattern. Prevents creating new instances of the class.
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new Constants();
        }
        return self::$instance;
    }

    public function getDatabaseInfo()
    {
        return array(
            "DB_HOST" => $_ENV['DB_HOST'],
            "DB_USER" => $_ENV['DB_USER'],
            "DB_PASSWORD" => $_ENV['DB_PASSWORD'],
            "DB_DATABASE" => $_ENV['DB_DATABASE'],
        );
    }
}
