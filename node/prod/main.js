require('dotenv').config()
const axios = require('axios');
const kafka = require("kafka-node");
const client = new kafka.KafkaClient({kafkaHost: process.env.ADDRESS+':'+process.env.PORT});
const producer = new kafka.Producer(client);

setInterval( () => {
	axios
	  .get('http://'+process.env.PROMADDRESS+':'+process.env.PROMPORT+'/api/v1/query?query=container_memory_usage_bytes')
	  .then(res => {
		console.log(`statusCode: ${res.status}`);
		console.log(JSON.stringify(res.data));
		var payload = [{ topic: "zb-data", messages: JSON.stringify(res.data)}];
		producer.send(payload, function(error, result) {
			console.log("Enviando payload a Kafka");    
			if (error) {
			  console.log( "Envio fallido: ", error);    
			} else {      
			  console.log("Resultado del envio:", result);    
			}  
		});
	  })
	  .catch(error => {
		console.error(error);
	  });

	axios
	  .get('http://'+process.env.PROMADDRESS+':'+process.env.PROMPORT+'/api/v1/query?query=container_cpu_system_seconds_total')
	  .then(res => {
		console.log(`statusCode: ${res.status}`);
		console.log(JSON.stringify(res.data));
		var payload = [{ topic: "zb-data", messages: JSON.stringify(res.data)}];
		producer.send(payload, function(error, result) {
			console.log("Enviando payload a Kafka");    
			if (error) {
			  console.log( "Envio fallido: ", error);    
			} else {      
			  console.log("Resultado del envio:", result);    
			}  
		});
	  })
	  .catch(error => {
		console.error(error);
	  });
	  
	axios
	  .get('http://'+process.env.PROMADDRESS+':'+process.env.PROMPORT+'/api/v1/query?query=container_network_transmit_bytes_total')
	  .then(res => {
		console.log(`statusCode: ${res.status}`);
		console.log(JSON.stringify(res.data));
		var payload = [{ topic: "zb-data", messages: JSON.stringify(res.data)}];
		producer.send(payload, function(error, result) {
			console.log("Enviando payload a Kafka");    
			if (error) {
			  console.log( "Envio fallido: ", error);    
			} else {      
			  console.log("Resultado del envio:", result);    
			}  
		});
	  })
	  .catch(error => {
		console.error(error);
	  });
	  
	axios
	  .get('http://'+process.env.PROMADDRESS+':'+process.env.PROMPORT+'/api/v1/query?query=container_network_receive_bytes_total')
	  .then(res => {
		console.log(`statusCode: ${res.status}`);
		console.log(JSON.stringify(res.data));
		var payload = [{ topic: "zb-data", messages: JSON.stringify(res.data)}];
		producer.send(payload, function(error, result) {
			console.log("Enviando payload a Kafka");    
			if (error) {
			  console.log( "Envio fallido: ", error);    
			} else {      
			  console.log("Resultado del envio:", result);    
			}  
		});
	  })
	  .catch(error => {
		console.error(error);
	  });
	 
	axios
	  .get('http://'+process.env.PROMADDRESS+':'+process.env.PROMPORT+'/api/v1/query?query=container_network_receive_bytes_total')
	  .then(res => {
		console.log(`statusCode: ${res.status}`);
		console.log(JSON.stringify(res.data));
		var payload = [{ topic: "zb-data", messages: JSON.stringify(res.data)}];
		producer.send(payload, function(error, result) {
			console.log("Enviando payload a Kafka");    
			if (error) {
			  console.log( "Envio fallido: ", error);    
			} else {      
			  console.log("Resultado del envio:", result);    
			}  
		});
	  })
	  .catch(error => {
		console.error(error);
	  });
}, 10000)