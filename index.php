<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./resources/css/styles.css">
    <title>Portfolio</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="https://ctsit.pl">My website</a></li>
            <?php
                $dirs = preg_grep('/^([^.])/', scandir(getcwd()));
                foreach($dirs as $dir){
                    if( ($dir !== 'index.php') && ($dir !== 'resources') ){
                        echo '<li><a href="'. $dir .'/">'. ucfirst(preg_replace('/-/', ' ', $dir)) .'</a></li>';
                    }
                }
            ?>
        </ul>
    </nav>
</body>
</html>