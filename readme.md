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

### Install node-gyp
```terminal
sudo npm install -g node-gyp
```

### Install johnny-five
```terminal
sudo npm install johnny-five
```

### Install raspi-io
```terminal
sudo npm install raspi-io
```

### Install serialport
```terminal
sudo npm install serialport
```


## GPIO Pinout reference
![GPIO pinout](https://learn.adafruit.com/system/assets/assets/000/003/059/medium800/learn_raspberry_pi_gpio-srm.png?1396790782)
