import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    images: [{ type: String }],
    brand: { type: String, required: true },
    oldPrice: { type: Number },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    countInStock: { type: Number, default: 0 },
    additional: {
      antivirus: { type: String, default: 'Not available' },
      backlitKeyboard: { type: String, default: 'Not available' },
      diskDrive: { type: String, default: 'Not available' },
      fingerPrintSensor: { type: String, default: 'Not available' },
      includedSoftware: { type: String, default: 'Not available' },
      keyboard: { type: String, default: 'Not available' },
      lockPort: { type: String, default: 'Not available' },
      pointerDevice: { type: String, default: 'Not available' },
      securityChip: { type: String, default: 'Not available' },
      webCamera: { type: String, default: 'Not available' },
    },
    connectivity: {
      bluetooth: { type: String, default: 'Not available' },
      ethernet: { type: String, default: 'Not available' },
      wirelessLAN: { type: String, default: 'Not available' },
    },
    dimensions: {
      dimensions: { type: String, default: 'Not available' },
      weight: { type: Number, default: -1 },
    },
    displayAndAudio: {
      internalMic: { type: String, default: 'Not available' },
      refreshRate: { type: Number, default: -1 },
      screenResolution: { type: String, default: 'Not available' },
      screenSize: { type: String, default: 'Not available' },
      screenType: { type: String, default: 'Not available' },
      soundChip: { type: String, default: 'Not available' },
      soundProperties: { type: String, default: 'Not available' },
      speakers: { type: String, default: 'Not available' },
      touchscreen: { type: String, default: 'Not available' },
    },
    general: {
      batteryBackup: { type: Number, default: -1 },
      batteryCell: { type: Number, default: -1 },
      color: { type: String, default: 'Not available' },
      modelName: { type: String, default: 'Not available' },
      modelNumber: { type: String, default: 'Not available' },
      msOfficeProvided: { type: String, default: 'Not available' },
      partNumber: { type: String, default: 'Not available' },
      powerSupply: { type: String, default: 'Not available' },
      salesPackage: { type: String, default: 'Not available' },
      series: { type: String, default: 'Not available' },
      suitableFor: [{ type: String }],
    },
    operatingSystem: {
      operatingSystem: { type: String, default: 'Not available' },
      osArchitecture: { type: String, default: 'Not available' },
    },
    portAndSlot: {
      hardwareInterface: { type: String, default: 'Not available' },
      hdmiPort: { type: String, default: 'Not available' },
      micIn: { type: String, default: 'Not available' },
      multiCardSlot: { type: String, default: 'Not available' },
      usbPort: { type: String, default: 'Not available' },
    },
    processorAndMemory: {
      cache: { type: Number, default: -1 },
      clockSpeed: { type: String, default: 'Not available' },
      dedicatedGraphicMemoryCapacity: {
        type: Number,
        default: -1,
      },
      dedicatedGraphicMemoryType: { type: String, default: 'Not available' },
      expandableMemory: { type: Number, default: -1 },
      graphicProcessor: { type: String, default: 'Not available' },
      hdd: { type: String, default: 'Not available' },
      hddCapacity: { type: Number, default: -1 },
      memorySlots: { type: Number, default: -1 },
      numberofCores: { type: Number, default: -1 },
      processorBrand: { type: String, default: 'Not available' },
      processorGeneration: { type: String, default: 'Not available' },
      processorName: { type: String, default: 'Not available' },
      processorVariant: { type: String, default: 'Not available' },
      ram: { type: Number, default: -1 },
      ramFrequency: { type: Number, default: -1 },
      ramType: { type: String, default: 'Not available' },
      rpm: { type: Number, default: -1 },
      ssd: { type: String, default: 'Not available' },
      ssdCapacity: { type: Number, default: -1 },
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
