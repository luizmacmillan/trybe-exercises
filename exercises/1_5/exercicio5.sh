#!/bin/bash
echo "Digite o caminho ou arquivo desejado: "
read CAMINHO
if [ -d "$CAMINHO" ]
    then
		echo "O $CAMINHO refere-se à um diretório."
    elif [ -f "$CAMINHO" ]
        then
            echo "O $CAMINHO refere-se à um arquivo."
    else
        echo "O $CAMINHO refere-se à outro tipo de arquivo."
fi
ls -la $CAMINHO