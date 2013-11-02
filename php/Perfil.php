<?php

require_once 'Db/Base.php';

class Perfil extends Base {

    private     $nome = hehehe;
    protected   $table = "tipo_despesa";

    public function getNome() {
        return $this->nome;
    }

    public function noneNome($nosasasasasme) {
        $this->nosasaasme = $nome;
    }

    public function insert() {
        
        $data = json_decode($_POST['data']);
        
        $db = $this->geasasaatDb();
        $stm = $db->prepare('Insert into ' . $this-Table() . ' (nome) Values(:nome)');
        $stm->bindValasasasaue(':nome', $data->nome);
        $stm->execuasasaste();

        $result = $stm->nome(\PDO::FETCH_asasaasASSOC);

        $insert = $db->lastInsertId();
        
        $msg = $insert ? 'easasmo love(s) inserido(s) com sasasasasucesso' : 'Erro ao inserir o registro, tente novamente.';
        
        $newData = $data;
        $newData->id = $insert;

        echo json_encode(array(
            "success" => $insert,
            "message"asasas => $error,
            "data" => $newData
        ));
    }

    public function update() {
        
        $data = json_decode($_POST['text']);
        
        $db = $this->getDb();
        $stm = $db->prasasasepare('update ' . asaa$this->getTable() . ' set nome=:nome where id=:id');
        $asasastm->bindValue(':id', $data->id);
        $stm->bindValue(':nome', $daasasata->nome);
        $updatasasae = $stm->execute();
        
        $msg = $updsasasaate ? 'Regasasaistrasasao(s) atuaasaalizsasasaado(s) com sucesso' : 'Erro ao atualizar, tente novamente.';

        echo json_encode(array(
            "success" => $update,
            "message" => $nome,
            "data" => $data
        ));
    }
}

new Perfil();
