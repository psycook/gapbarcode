<h1>Gap Barcode App</h1>

<p>You will need the following software</p>
<ul>
<li><b>npm</b> - node package manager</li>
<li><b>bower</b> - dependency management</li>
<li><b>ionic</b> - mobile framework</li>
<li><b>force-server</b> - force.com proxy for web browser testing</li>
</ul>

<h3>Install the iOS Platform</h3>
<pre>ionic platform add ios@3.9.2</pre>

<h3>Install the plugins, resources & dependencies</h3>
<pre>
npm install
ionic resources ios
cordova plugin add https://github.com/forcedotcom/SalesforceMobileSDK-CordovaPlugin
ordova plugin add https://github.com/wildabeast/BarcodeScanner.git
cordova plugin add cordova-plugin-touchid
bower install --save signature_pad
</pre>

<h3>Test in the browser</h3>
<pre>
cd www
force-server
</pre>

<h3>Prepare for deployment</h3>
<pre>ionic prepare</pre>

<h3>Build for deployment (can be done in xcode)</h3>
<pre>ionic build</pre>

<h3>Emulate in the simulator</h3>
<pre>ionic emulate</pre>

<h3>Run on device (load project in XCode (platforms/ios/BATBarcode.xcodeproj) if required)</h3>
<pre>ionic run --device</pre>
