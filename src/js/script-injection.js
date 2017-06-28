import {UniqId} from '../../bower_components/uniq-id/dist/js/uniq-id';

export class ScriptInjection {
  static execute(operator) {
    const scriptId = UniqId.generate('chrome-script-injection');
    const scriptContent = `document.getElementById("${scriptId}").setAttribute("value", ${operator});`;
    let value = null;

    ScriptInjection.inject(scriptContent, true, () => {
      value = document.getElementById(scriptId).getAttribute('value');
    }, scriptId);

    return value;
  }

  static inject(scriptContent, removeAfter, cb, scriptId) {
    if (!scriptId) {
      scriptId = UniqId.generate('chrome-script-injection');
    }
    const script = document.createElement('script');

    script.id = scriptId;
    script.appendChild(document.createTextNode(scriptContent));

    (document.body || document.head || document.documentElement).appendChild(script);

    if (cb) {
      cb(script);
    }

    if (removeAfter) {
      script.remove();
    }
  }
}