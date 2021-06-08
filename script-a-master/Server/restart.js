import { spawn } from 'child_process';
import * as schedule from 'node-schedule';

var child = spawn("altv-server.exe", {stdio: ['pipe', process.stdout, process.stderr]});
process.stdin.pipe(child.stdin);

schedule.scheduleJob('0 30 03 * * *', function(){
    child.stdin.write("announce 30\n");
});

schedule.scheduleJob('0 45 03 * * *', function(){
    child.stdin.write("announce 15\n");
});

schedule.scheduleJob('0 55 03 * * *', function(){
    child.stdin.write("announce 5\n");
});

schedule.scheduleJob('0 58 03 * * *', function(){
    child.stdin.write("announce 2\n");
});

schedule.scheduleJob('0 0 04 * * *', function(){
    child.stdin.write("shutdown\n");
    setTimeout(() => {
        child = spawn("altv-server.exe", {stdio: ['pipe', process.stdout, process.stderr]});
        process.stdin.pipe(child.stdin);
    }, 10000);
});


