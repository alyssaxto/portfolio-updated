import azure.functions as func
import logging
import json
import uuid
import os
from azure.identity import DefaultAzureCredential

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="login", methods=["POST"])
def admin_login(req: func.HttpRequest) -> func.HttpResponse:
  try:
    body = req.get_json()
    user_password = body.get('password')
    actual_password = os.environ.get("ADMIN_PASSWORD")
    logging.info("connected.")
    if actual_password and user_password == actual_password:
      return func.HttpResponse(json.dumps({"success": True}), status_code=200)
    else:
      return func.HttpResponse(json.dumps({"success": False}), status_code=401)
  except Exception:
    return func.HttpResponse("Error processing request", status_code=400)