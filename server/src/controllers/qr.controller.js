import { QR } from '../models/Qr.js';

export const getAllQRs = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const pageSize = 25;
    const offset = (page - 1) * pageSize;

    const { rows, count } = await QR.findAndCountAll({
      limit: pageSize,
      offset: offset,
      order: [['createdAt', 'DESC']],
    });

    const totalPages = Math.ceil(count / pageSize);

    res.status(200).json({
      data: rows,
      pageInfo: {
        totalResults: count,
        totalPages: totalPages,
        currentPage: parseInt(page),
        pageSize
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

export const createQRsByUUID = async (req, res) => {
  const QRs = req.body;
  try {
    const createdQRs = await Promise.all(
      QRs.map(async (qrData) => {
        const { IDpet, QRurl } = qrData;
        try {
          const [createdQR, created] = await QR.findOrCreate({
            where: { IDpet, QRurl },
            defaults: { IDpet, QRurl },
          });
          return created ? createdQR : null;
        } catch (error) {
          throw new Error(error);
        }
      })
    );

    const filteredQRs = createdQRs.filter((qr) => qr !== null);

    res.status(200).json(filteredQRs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}