<h1>Gap Barcode App</h1>

<p>You will need the following software</p>
<ul>
<li>npm - node package manager</li>
<li>bower - dependency management</li>
<li>ionic - mobile framework</li>
<li>force-server - force.com proxy for web browser testing</li>
</ul>

<h3>Install the iOS Platform</h3>
<p>ionic platform add ios@3.9.2</p>

<h3>Install the plugins, resources & dependencies</h3>
<ul>
<li>npm install</li>
<li>ionic resources ios</li>
<li>cordova plugin add https://github.com/forcedotcom/SalesforceMobileSDK-CordovaPlugin</li>
<li>cordova plugin add https://github.com/wildabeast/BarcodeScanner.git</li>
<li>cordova plugin add cordova-plugin-touchid</li>
<li>bower install --save signature_pad</li>
</ul>

<h3>Test in the browser</h3>
<p>cd www</p>
<p>force-server</p>

<h3>Prepare for deployment</h3>
<p>ionic prepare</p>

<h3>Build for deployment (can be done in xcode)</h3>
<p>ionic build</p>

<h3>Emulate in the simulator</h3>
<p>ionic emulate</p>

<h3>Run on device (load project in XCode (platforms/ios/BATBarcode.xcodeproj) if required)</h3>
<p>ionic run --device</p>
