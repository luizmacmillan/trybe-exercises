#!/bin/bash
CAMINHO="/home/luckeus/unix_tests/shell_script/teste.sh"
if [ -e "$CAMINHO" ]
    then
		echo "O caminho $CAMINHO está habilitado!"
        if [ -w "$CAMINHO" ]
            then
                echo "Você tem permissão para editar $CAMINHO."
            else
                echo "Você NÃO foi autorizado a editar $CAMINHO."
        fi
    else
        echo "O caminho $CAMINHO é inválido!"
fi
