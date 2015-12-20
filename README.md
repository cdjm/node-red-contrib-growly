# node-red-contrib-growly

<a href=\"http://nodered.org\" target=\"_new\">Node-RED</a> node to send popup notifications.
This is a quick hack for node-red-node-notify to use growly instead of growl.

Original node by Dave Conway-Jones <ceejay@vnet.ibm.com> (http://norered.org)
Growly made by Ibrahim Al-Rajhi <abrahamalrajhi@gmail.com> (https://github.com/theabraham/growly)

Install
-------

Run the following command in the root directory of your Node-RED install

    npm install node-red-node-notify (Sorry, no NPM yet)

Thanks to Growly there are zero dependencies and cross platform compatibility.


Usage
-----

Uses Growly to push the **msg.payload** to the local desktop or a GNTP server on the network.

The title can be set by **msg.topic**.
