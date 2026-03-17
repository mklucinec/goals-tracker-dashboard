// force redeploy - api pickup
module.exports = async function (context, req) {
  context.res = {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      status: "API OK",
      message: "Goals API is running"
    }
  };
};
