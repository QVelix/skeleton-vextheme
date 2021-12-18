<?php
    if(isset($_POST['json'])){
        $newJson;
        $json = json_decode($_POST['json'], JSON_OBJECT_AS_ARRAY);
        $i=0;
        foreach($json as $k=>$element){
            if(is_array($element["links"])&&!empty($element["links"])){
                if(is_array($element["files"])){
                    $newJson[$i]=array('id'=>$k,'name'=>$element["name"],'prices'=>$element["prices"], 'links'=>$element["links"], 'files'=>'https://taxcom.ru'.$element["files"]["specification"]);
                }else{
                    $newJson[$i]=array('id'=>$k,'prices'=>$element["prices"], 'links'=>$element["links"]);
                }
                $i++;
            }
        }
        echo json_encode($newJson);
        return json_encode($newJson);
    }
?>