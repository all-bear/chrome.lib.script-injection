import {UniqId} from '../../bower_components/uniq-id/dist/js/uniq-id';

export class ScriptInjection {
  static execute(operator) {
    const scriptId = UniqId.generate('chrome-script-injection');
    const scriptContent = `document.getElementById("${scriptId}").setAttribute("value", ${operator});`;
    const script = document.createElement('script');
    let value;

    script.id = scriptId;
    script.appendChild(document.createTextNode(scriptContent));

    (document.body || document.head || document.documentElement).appendChild(script);

    value = document.getElementById(scriptId).getAttribute('value');

    script.remove();

    return value;
  }
}