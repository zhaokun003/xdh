<?php

//启动服务，在当前目录，执行 php -S 127.0.0.1:8888

//GET  http://127.0.0.1:8888/mock.php/now           返回服务器当前时间

//POST http://127.0.0.1:8888/mock.php/user/create        新增用户 字段:username sex，成功返回用户id
//GET  http://127.0.0.1:8888/mock.php/user               列出所有用户
//GET  http://127.0.0.1:8888/mock.php/user/get?id=xxx    查询单个用户
//POST http://127.0.0.1:8888/mock.php/user/update?id=xxx 更新指定用户
//POST http://127.0.0.1:8888/mock.php/user/delete?id=xxx 删除指定用户


header('Access-Control-Allow-Origin: *');

$pathinfo = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '/';

define('DATA_FILE', 'users.json');
$user = new User();

switch($pathinfo){
    case "/user":
        echo json_encode($user->getAll());
        break;
    case "/user/get":
        echo json_encode($user->getOne($_GET['id']));
        break;
    case '/user/create':
        echo json_encode($user->create($_POST));
        break;
    case '/user/delete':
        echo json_encode(['status'=>$user->delete($_GET['id'])]);
        break;
    case '/user/update':
        echo json_encode(['status'=>$user->update($_GET['id'], $_POST)]);
        break;

    case '/now':
        echo json_encode(['status'=>true, 'time'=>date('Y-m-d H:i:s')]);
        break;
    case '/health':
        echo 'ok';
        break;
    default:
       echo '404 Not Found!';
}

class User{

    private function check($user){
        if(empty($user['username'])){
            echo 'invalid username';
            exit;
        }

        if(!array_key_exists('sex', $user)){
            echo 'invalid sex';
            exit;
        }
    }

    private function getMaxId(){
        if(file_exists('maxid')){
            $id = intval(file_get_contents('maxid')) + 1;
        }else{
            $id = 1;
        }

        file_put_contents('maxid', $id);
        return $id;
    }

    public function getAll(){
        if(!file_exists(DATA_FILE)){
            return [];
        }
        
        return json_decode(file_get_contents(DATA_FILE), true);
    }

    public function getOne($id){
        foreach($this->getAll() as $user){
            if($user['id'] == $id){
                return $user;
            }
        }
    }

    public function create($user){

        $this->check($user);

        $users = $this->getAll();
        $user['id'] = $this->getMaxId();
        $users[] = $user;
        file_put_contents(DATA_FILE, json_encode($users));
        return $user['id'];
    }

    public function delete($id){
        $users = [];
        foreach($this->getAll() as $user){
            if($user['id'] != $id){
                $users[] = $user;
            }
        }
        file_put_contents(DATA_FILE, json_encode($users));
        return true;
    }

    public function update($id, $user){
        $this->check($user);

        $users = $this->getAll();
        foreach($users as $k=>$v){
            if($v['id'] == $id){
                $user['id'] = $id;
                $users[$k] = $user;
            }
        }
        file_put_contents(DATA_FILE, json_encode($users));
        return true;
    }
}