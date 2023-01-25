# ravencoin-reader
Read information from Ravencoin blockchain



## Install and use

Create an empty JavaScript project
```
mkdir reader
cd reader
npm init -y
npm install github:ravenrebels/ravencoin-reader
```

Now create a file called `index.mjs` the extension .mjs to use ECMA Module (ECMAScript Module) in Node. js applications.

Add content to index.mjs
```
import Reader from "@ravenrebels/ravencoin-reader";

Reader.getAsset("FREN#RED").then(console.table);
```


Now run your script
```
node index.mjs
```

Expected output

![image](https://user-images.githubusercontent.com/9694984/214542343-c842ca90-e0bd-4d25-9983-34d3fbf57ace.png)

# API (more to come)
```
declare function getAssetBalance(addresses: Array<string>): Promise<any>;
declare function getAsset(name: string): Promise<any>;
declare function getAllAssets(prefix?: string, includeAllMetaData?: boolean): Promise<any>;
declare function getMempool(): Promise<any>;
declare function verifyMessage(address: string, signature: string, message: string): Promise<boolean>;
declare function getRavencoinBalance(addresses: Array<string>): {};
```

