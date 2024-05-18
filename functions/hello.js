//domain/.netlify/functions/hello

const items = [
  { id: 1, name: "john" },
  { id: 2, name: "kevin" },
];

exports.handler = async function (evemt, context) {
  return {
    statusCode: 200,
    body: "hello world",
  };
};
