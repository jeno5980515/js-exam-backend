import socket from 'socket.io';
import fs from 'fs';

const io = socket();
io.on('connection', (client) => {
	client.on('code', (data) => {
		try {
			fs.appendFileSync('message.txt', data);
			fs.appendFileSync('message.txt', '\n$$$$$$$$$$$$$$$$$$$$$$$\n');
		} catch (err) {
			console.log(err);
			/* Handle the error */
		}
	});
});
io.listen(8080);