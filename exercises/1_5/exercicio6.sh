#!/bin/bash
CAMINHO=$1
if [ -d "$CAMINHO" ]
	then
		 echo "O caminho refere-se à um Diretório."
elif [ -f "$CAMINHO" ]
	then	
		echo "O caminho refere-se à um Arquivo."
	else
		echo "O caminho não refere-se à um Arquivo ou Diretório."
fi
ls -la