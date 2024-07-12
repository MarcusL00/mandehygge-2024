<?php

namespace MandeHyggeApi\Utils;

use MandeHyggeApi\Utils\Constants;
use Illuminate\Database\Capsule\Manager as Capsule;

class Database
{
    private static $instance = null;
    private $capsule;

    private function __construct()
    {
        $constants = Constants::getInstance();
        $databaseInfo = $constants->GetDatabaseInfo();

        $this->capsule = new Capsule();

        $this->capsule->addConnection([
            'driver'    => 'mysql',
            'host'      => $databaseInfo["DB_HOST"],
            'database'  => $databaseInfo["DB_DATABASE"],
            'username'  => $databaseInfo["DB_USER"],
            'password'  => $databaseInfo["DB_PASSWORD"],
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => '',
        ]);

        $this->capsule->setAsGlobal();
        $this->capsule->bootEloquent();
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }


    public function create($data)
    {
        try {
            $model = \MandeHyggeApi\Models\ORM\QuizAnswer::class;
            return $model::create($data);
        } catch (\PDOException $e) {
            http_response_code(500);
            echo json_encode(["success" => false]);
        }
    }
}
