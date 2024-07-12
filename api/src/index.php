<?php

namespace MandeHyggeApi;

use Dotenv;
use MandeHyggeApi\Middleware\CorsMiddleware;
use MandeHyggeApi\Utils\Router;

require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__);
$dotenv->load();

class ApiEntry
{
    private $router;
    private $corsMiddleware;

    public function __construct()
    {
        $this->router = Router::getInstance();
        $this->corsMiddleware = CorsMiddleware::getInstance();
    }

    public function handleRequest()
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $path = $_SERVER['REQUEST_URI'];
        $requestBody = json_decode(file_get_contents('php://input'), true);

        $this->corsMiddleware->validateCors();

        $this->router->handleRequest($method, $path, $requestBody);
    }
}

$apiEntry = new ApiEntry;
$apiEntry->handleRequest();
