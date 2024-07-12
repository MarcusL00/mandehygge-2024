<?php

namespace MandeHyggeApi\Controllers;

use MandeHyggeApi\Utils\Database;

class FormController
{
    private $database;

    public function __construct()
    {
        $this->database = Database::getInstance();
    }

    public function submitAnswers($data)
    {
        $formattedData = $data[0];

        $this->database->create([
            "name" => $formattedData["name"],
            "answer1" => $formattedData["answer1"],
            "answer2" => $formattedData["answer2"],
            "answer3" => $formattedData["answer3"],
            "answer4" => $formattedData["answer4"],
            "answer5" => $formattedData["answer5"],
            "answer6" => $formattedData["answer6"],
            "answer7" => $formattedData["answer7"],
            "answer8" => $formattedData["answer8"],
            "answer9" => $formattedData["answer9"],
            "answer10" => $formattedData["answer10"],
            "answer11" => $formattedData["answer11"],
            "answer12" => $formattedData["answer12"],
            "answer13" => $formattedData["answer13"],
            "answer14" => $formattedData["answer14"]
        ]);

        http_response_code(200);
        echo json_encode(["success" => true]);
    }
}
