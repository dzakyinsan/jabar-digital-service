class Cart {
  cart = [];

  tambahProduk(kodeProduk, kuantitas) {
    const availabilityCheck = this.cart.find(
      (cart) => cart.name === kodeProduk
    );

    if (availabilityCheck) {
      availabilityCheck.qty += kuantitas;
    } else {
      this.cart.push({ name: kodeProduk, qty: kuantitas });
    }
  }

  hapusProduk(kodeProduk) {
    this.cart = this.cart.filter((cart) => cart.name !== kodeProduk);
  }

  tampilkanCart() {
    return this.cart.map((cart) => `${cart.name} (${cart.qty})`).join();
  }
}

const keranjang = new Cart();

keranjang.tambahProduk("Pisang Hijau", 2);

keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");

keranjang.hapusProduk("Semangka Merah");

console.log(keranjang.tampilkanCart());
