const express = require('express')
const app = express()
app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
    const { turno, estado } = req.query;
    try {
        if (estado.length = 64) {
            let array = new Array(8);
            for (let i = 0; i < 8; i++) {
                array[i] = new Array(8);
            }

            console.log("Turno: " + (turno === '1' ? "Blanco" : "Negro"));
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    array[i][j] = estado[(8 * i) + j]
                }
            }

            var cadena = "";
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    cadena += array[i][j];
                    cadena += " ";
                }
                console.log(cadena);
                cadena = "";
            }

            var x = 0;
            var y = 0;
            var movimientos = 0;
            console.log(movimientos);
            console.log(x);
            console.log(y);



            res.send("24")
        } else {
            res.send("Matriz incorrecta")
        }
    } catch (error) {
        res.send('Error en la ejecución')
    }
});

app.listen(app.get('port'), () => console.log(`Example app listening at http://localhost:${app.get('port')}`));