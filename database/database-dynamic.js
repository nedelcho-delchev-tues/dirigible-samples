var response = require("http/v4/response");
var database = require("db/v4/database");

database.createDataSource("mydynamic", "org.h2.Driver", "jdbc:h2:~/mytest", "sa", "", null);

var connection = database.getConnection("dynamic", "mydynamic");
try {
    var statement = connection.prepareStatement("select current_date from dual");
    var resultSet = statement.executeQuery();
    while (resultSet.next()) {
        response.println("[date]: " + resultSet.getString(1));
    }
    resultSet.close();
    statement.close();
} catch (e) {
    console.trace(e);
    response.println(e.message);
} finally {
    connection.close();
}

response.flush();
response.close();