# Setup

## Install Raspian or another OS on your Raspberry Pi

```terminal
dd bs=4M if=2014-06-20-wheezy-raspbian.img of=/dev/sdx
```

## Install node.js

### Download latest package
```terminal
sudo wget http://node-arm.herokuapp.com/node_latest_armhf.deb
```

### Update package list

```terminal
sudo apt-get update
sudo apt-get upgrade
```

### Install node.js package
```terminal
sudo dpkg -i node_latest_armhf.deb
```

### Verify installation
```terminal
node -v
npm -v
```

## Install node-gyp
```terminal
npm install -g node-gyp
```

## Install johnny-five
```terminal
npm install johnny-five
```

## Install raspi-io
```terminal
npm install raspi-io
```