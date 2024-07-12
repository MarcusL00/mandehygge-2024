<?php

namespace MandeHyggeApi\Models\ORM;

use illuminate\database\Eloquent\Model;

class QuizAnswer extends Model
{
    protected $table = 'QuizAnswers';
    protected $primaryKey = 'id';
    protected $fillable = [
        "name",
        "answer1",
        "answer2",
        "answer3",
        "answer4",
        "answer5",
        "answer6",
        "answer7",
        "answer8",
        "answer9",
        "answer10",
        "answer11",
        "answer12",
        "answer13",
        "answer14"
    ];
    protected $casts = [
        "name"     => "string",
        "answer1"  => "string",
        "answer2"  => "string",
        "answer3"  => "string",
        "answer4"  => "string",
        "answer5"  => "string",
        "answer6"  => "string",
        "answer7"  => "string",
        "answer8"  => "string",
        "answer9"  => "string",
        "answer10" => "string",
        "answer11" => "string",
        "answer12" => "string",
        "answer13" => "string",
        "answer14" => "string"
    ];
    public $timestamps = false;
}
