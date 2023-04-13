import { exec } from "child_process";
import { showHUD } from "@raycast/api";

export default async function main() {
  exec('/Applications/Privileges.app/Contents/Resources/PrivilegesCLI --add');
  await showHUD("🔓 Granted priviliges for 1 minute");
  await new Promise(resolve => setTimeout(resolve, 60000));
  exec('/Applications/Privileges.app/Contents/Resources/PrivilegesCLI --remove');
  await showHUD("🔒 Priviliges revoked");
}
