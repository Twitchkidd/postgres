# setting up postgres

## Installation

### Requirements

[Requirements docs](https://www.postgresql.org/docs/current/install-requirements.html)

On the Raspberry Pi 400 with the stock OS, checked `make`, `gcc`, and `tar`, not sure on the GNU readline library or `libedit` or `libreadline`, also not sure on `zlib`. Perl we're good, I don't know about `libperl` ... I'm not going through the rest of the optional requirements after scanning.

Disk space, ooo, we're getting there, lol.

### Getting the Source

[https://www.postgresql.org/download/](https://www.postgresql.org/download/)

Let's see if the Debian version works ...

`sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'`
`wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -`
`sudo apt-get update`
`sudo apt-get -y install postgresql`

Uhoh!

`N: Skipping acquire of configured file 'main/binary-armhf/Packages' as repository 'http://apt.postgresql.org/pub/repos/apt buster-pgdg InRelease' doesn't support architecture 'armhf'`

Oh, _sweet,_ I was able to figure out how to undo the two commands! To the Internet! ... Oh, boy ... well, clicking 'Other Linux' on the official site basically says, "Use your package manager."

### ... Yolo

`sudo apt-get -y install postgresql`

Well, shoot. Everything ran, I've got a `psql` version, and running `pg_lsclusters` shows it's online on port 5432 ... crazy ... Okay, well, [this article by Data Pilot](https://kb.objectrocket.com/postgresql/how-to-install-and-set-up-postgresql-on-a-raspberry-pi-part-2-1165) shows how to open it up to the network.

## Node

Let's see if I can connect to it from Node now.
