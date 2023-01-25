var $g5Y9E$ravenrebelsravencoinrpc = require("@ravenrebels/ravencoin-rpc");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $80bd448eb6ea085b$export$2e2bcd8739ae039);

const $80bd448eb6ea085b$var$ONE_FULL_COIN = 1e8;
const $80bd448eb6ea085b$var$URL_MAINNET = "https://rvn-rpc-mainnet.ting.finance/rpc";
const $80bd448eb6ea085b$var$URL_TESTNET = "https://rvn-rpc-testnet.ting.finance/rpc";
let $80bd448eb6ea085b$var$username = "anonymouse";
let $80bd448eb6ea085b$var$password = "anonymous";
let $80bd448eb6ea085b$var$url = $80bd448eb6ea085b$var$URL_MAINNET;
let $80bd448eb6ea085b$var$rpc = (0, $g5Y9E$ravenrebelsravencoinrpc.getRPC)($80bd448eb6ea085b$var$username, $80bd448eb6ea085b$var$password, $80bd448eb6ea085b$var$url);
function $80bd448eb6ea085b$var$resetRPC() {
    $80bd448eb6ea085b$var$rpc = (0, $g5Y9E$ravenrebelsravencoinrpc.getRPC)($80bd448eb6ea085b$var$username, $80bd448eb6ea085b$var$password, $80bd448eb6ea085b$var$url);
    return $80bd448eb6ea085b$var$rpc;
}
function $80bd448eb6ea085b$var$setURL(newURL) {
    $80bd448eb6ea085b$var$url = newURL;
    $80bd448eb6ea085b$var$resetRPC();
}
function $80bd448eb6ea085b$var$setUsername(newUsername) {
    $80bd448eb6ea085b$var$username = newUsername;
    $80bd448eb6ea085b$var$resetRPC();
}
function $80bd448eb6ea085b$var$setPassword(newPassword) {
    $80bd448eb6ea085b$var$password = newPassword;
    $80bd448eb6ea085b$var$resetRPC();
}
function $80bd448eb6ea085b$var$turnIntoStringArray(str) {
    if (typeof str === "string") return [
        str
    ];
    return str;
}
function $80bd448eb6ea085b$var$getAddressMempool(address) {
    const addresses = $80bd448eb6ea085b$var$turnIntoStringArray(address); //Support both string and string array
    const includeAssets = true;
    return $80bd448eb6ea085b$var$rpc((0, $g5Y9E$ravenrebelsravencoinrpc.methods).getaddressmempool, [
        {
            addresses: addresses
        },
        includeAssets
    ]);
}
function $80bd448eb6ea085b$var$getAddressDeltas(address) {
    const addresses = $80bd448eb6ea085b$var$turnIntoStringArray(address);
    return $80bd448eb6ea085b$var$rpc((0, $g5Y9E$ravenrebelsravencoinrpc.methods).getaddressdeltas, [
        {
            addresses: addresses
        }
    ]);
}
function $80bd448eb6ea085b$var$getAssetBalance(address) {
    const addresses = $80bd448eb6ea085b$var$turnIntoStringArray;
    const includeAssets = true;
    return $80bd448eb6ea085b$var$rpc((0, $g5Y9E$ravenrebelsravencoinrpc.methods).getaddressbalance, [
        {
            addresses: addresses
        },
        includeAssets
    ]);
}
function $80bd448eb6ea085b$var$getAsset(name) {
    return $80bd448eb6ea085b$var$rpc((0, $g5Y9E$ravenrebelsravencoinrpc.methods).getassetdata, [
        name
    ]);
}
function $80bd448eb6ea085b$var$getAllAssets(prefix = "*", includeAllMetaData = false) {
    return $80bd448eb6ea085b$var$rpc((0, $g5Y9E$ravenrebelsravencoinrpc.methods).listassets, [
        prefix,
        includeAllMetaData
    ]);
}
function $80bd448eb6ea085b$var$getMempool() {
    return $80bd448eb6ea085b$var$rpc((0, $g5Y9E$ravenrebelsravencoinrpc.methods).getrawmempool, [
        true
    ]);
}
function $80bd448eb6ea085b$var$verifyMessage(address, signature, message) {
    const params = [
        address,
        signature,
        message
    ];
    return $80bd448eb6ea085b$var$rpc((0, $g5Y9E$ravenrebelsravencoinrpc.methods).verifymessage, params);
}
function $80bd448eb6ea085b$var$getRavencoinBalance(addresses) {
    if (!addresses || addresses.length < 1) return {};
    const includeAssets = false;
    const params = [
        {
            addresses: addresses
        },
        includeAssets
    ];
    return $80bd448eb6ea085b$var$rpc((0, $g5Y9E$ravenrebelsravencoinrpc.methods).getaddressbalance, params);
}
var $80bd448eb6ea085b$export$2e2bcd8739ae039 = {
    getAddressDeltas: $80bd448eb6ea085b$var$getAddressDeltas,
    getAddressMempool: $80bd448eb6ea085b$var$getAddressMempool,
    getAllAssets: $80bd448eb6ea085b$var$getAllAssets,
    getAsset: $80bd448eb6ea085b$var$getAsset,
    getAssetBalance: $80bd448eb6ea085b$var$getAssetBalance,
    getMempool: $80bd448eb6ea085b$var$getMempool,
    getRavencoinBalance: $80bd448eb6ea085b$var$getRavencoinBalance,
    setUsername: $80bd448eb6ea085b$var$setUsername,
    setPassword: $80bd448eb6ea085b$var$setPassword,
    setURL: $80bd448eb6ea085b$var$setURL,
    verifyMessage: $80bd448eb6ea085b$var$verifyMessage,
    URL_MAINNET: $80bd448eb6ea085b$var$URL_MAINNET,
    URL_TESTNET: $80bd448eb6ea085b$var$URL_TESTNET
};


//# sourceMappingURL=index.cjs.map