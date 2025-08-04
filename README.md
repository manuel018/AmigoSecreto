# AmigoSecreto
Ejercicio reto de Amigo Secreto

Proyecto diseñado para mejorar la comprensión de la lógica de programación utilizando JavaScript y manipulación del DOM. La idea es simple: permitir al usuario agregar nombres a una lista y luego hacer un sorteo para seleccionar uno al azar.

Función - ```agregarAmigo()```

✅ Valida que el input no esté vacío.

📥 Agrega el nombre al array amigos.

🏷️ Crea un elemento "li" con el nombre ingresado y lo inserta en la lista visible.

🧼 Limpia el campo para permitir nuevas entradas.

🚫 Muestra una alerta si el input está vacío.


Función - ```sortearAmigo()```

🧠 Verifica que el array tenga elementos antes de sortear.

🔢 Genera un índice aleatorio válido usando Math.floor(Math.random() * amigos.length).

🥇 Muestra el nombre sorteado en la sección de resultado.

🚫 Muestra una alerta si el array está vacío.
