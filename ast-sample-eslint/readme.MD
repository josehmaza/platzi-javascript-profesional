
Regla: toda constante numerica debe ser declarada en mayuscula
El codigo para la regla es el siguientes

export default function(context) {
  return {
	VariableDeclarator(node){
    	// tipo const
      const declaration = node.parent.declarations[0];
      console.log(node.parent.kind)
      if (node.parent.kind === "const"){        
        //asegurarnos que el valor es un numero
        if (typeof declaration.init.value === "number") {
          if (declaration.id.name !== declaration.id.name.toUpperCase()) {
            context.report({
            	node: declaration.id,
              	message: "Const name not in Upper case",
              // Si quiero le puedo arreglar un fixer
              	fix: function (fixer) {
                	return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase());
                }
            })
          }          
        }
      }
    }
  };
};


