var httpClient = require("http/v4/client");
var response = require("http/v4/response");

var httpResponse = httpClient.delete("http://httpbin.org/delete");

response.println(httpResponse.statusMessage);
response.println(httpResponse.text);
response.flush();
response.close();