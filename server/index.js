import socket from 'socket.io';
import fs from 'fs';

const io = socket();
io.on('connection', (client) => {
	client.on('code', (data) => {
		try {
			const fileName = `${client.id}-${data.question}.txt`;
			fs.appendFileSync(fileName, data.code);
			fs.appendFileSync(fileName, '\n$$$$$$$$$$$$$$$$$$$$$$$\n');
		} catch (err) {
			console.log(err);
			/* Handle the error */
		}
	});
});
io.listen(8080);