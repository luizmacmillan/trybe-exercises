#!/bin/bash
CAMINHOS=$@
for CAMINHO in $CAMINHOS
	do
		if [ -d "$CAMINHO" ]
			then
		 	echo "O $CAMINHO refere-se à um Diretório."
			 ls -la $CAMINHO
		elif [ -f "$CAMINHO" ]
			then	
				echo "O $CAMINHO refere-se à um Arquivo."
				ls -la $CAMINHO
		else
			echo "O $CAMINHO não refere-se à um Arquivo ou Diretório."
		fi
	done