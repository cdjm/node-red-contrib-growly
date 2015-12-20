/**
 * Copyright 2013 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 **/

module.exports = function(RED) {
	"use strict";
	var growly = require('growly');
	var imagefile = process.env.NODE_RED_HOME+"/public/red/images/node-red.png";

	function GrowlyConfigNode(n) {
		RED.nodes.createNode(this,n);
		this.host = n.host;
		this.port = n.port;
	}

    RED.nodes.registerType("growly-config",GrowlyConfigNode);

    function GrowlyNode(n) {
        RED.nodes.createNode(this,n);
        this.title = n.title;
        var node = this;

        // Retrieve server configuration
		this.server = RED.nodes.getNode(n.server);
		var host = this.server.host;	
		var port = this.server.port;
		growly.setHost(host,port);

        this.on("input",function(msg) {
			node.status({fill:"grey",shape:"dot",text:host});

			var titl = this.title || msg.topic;
			if (typeof(msg.payload) == 'object') {
				msg.payload = JSON.stringify(msg.payload);
			}
			if (typeof(titl) != 'undefined') {
				growly.notify(msg.payload, { title: titl, icon: imagefile });
			}
			else {
				growly.notify(msg.payload, { icon: imagefile });
			}
		});

        this.on("error",function(msg) {
			node.status({fill:"red",shape:"dot",text:"error"});
		});
	}

	RED.nodes.registerType("growly",GrowlyNode);
}
