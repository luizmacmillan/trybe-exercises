#!/bin/bash
CAMINHO=$1
if [ -d "$CAMINHO" ]
    then
        QUANTIDADE=`ls -la $CAMINHO | wc -l`
		echo "O argumento $CAMINHO tem $QUANTIDADE arquivos."
    else
        echo "O argumento $CAMINHO não é um diretório!"
fi