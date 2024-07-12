<?php

namespace MandeHyggeApi\Utils;

use MandeHyggeApi\Controllers\FormController;

class Router
{
    private static $instance = null;

    private $routes = [];

    private function __construct()
    {
        $formController = new FormController;

        $this->routes = [
            ["POST", "/api/submitAnswers", [$formController, "submitAnswers"], ["requestBody"]],
        ];
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new Router();
        }
        return self::$instance;
    }

    public function handleRequest($method, $path, $requestBody)
    {
        foreach ($this->routes as $route) {
            $routeMethod = $route[0];
            $routePath = $route[1];
            $handler = $route[2];
            $params = $route[3] ?? [];

            if ($method === $routeMethod && $path === $routePath) {
                call_user_func_array([$handler[0], $handler[1]], [[$requestBody], $params]);
                return;
            }
        }

        http_response_code(404);
        echo json_encode(["error" => "This route does not exist!"]);
        exit;
    }
}
