const express = require("express");

const app = express();
app.use(express.json());

const usuariosAutorizados = [
    { usuario: "cliente1@mail.com", contraseña: "clave123" },
    { usuario: "cliente2@mail.com", contraseña: "secreto456" }
];

app.post("/validar", (req, res) => {
    const { usuario, contraseña } = req.body;
    const autorizado = usuariosAutorizados.some(u => u.usuario === usuario && u.contraseña === contraseña);
    
    if (autorizado) {
        res.json({ acceso: true, mensaje: "Acceso autorizado" });
    } else {
        res.json({ acceso: false, mensaje: "Acceso denegado" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
