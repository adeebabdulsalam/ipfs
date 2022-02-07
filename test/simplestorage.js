const SimpleStorage = artifacts.require("./SimpleStorage.sol");

contract("SimpleStorage", accounts => {
  it("...should store the link.", async () => {
    const simpleStorageInstance = await SimpleStorage.deployed();

    // Set value of 89
    await simpleStorageInstance.set("link.html", { from: accounts[0] });

    // Get stored value
    const storedData = await simpleStorageInstance.get.call();

    assert.equal(storedData, "link.html", "The link was not stored.");
  });
});
