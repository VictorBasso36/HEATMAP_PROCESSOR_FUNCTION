import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import prisma from '../prismaClient';
const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - HeatMap Lambda',
  });
});

router.post<{}, any>('/heatmaps', async (req, res) => {
  const dataPoints = req.body;
  const results = [];
  for (const dataPoint of dataPoints) {
    const { x, y, value, domain, ip } = dataPoint;
    try {
      const result = await prisma.heatMap.create({
        data: {
          x,
          y,
          value,
          domain,
          ip
        }
      });
      results.push(result);
    } catch (error) {
      console.error(`Failed to insert data point: ${JSON.stringify(dataPoint)}. Error: error`);
    }
  }
  return res.json(results);
});

export default router;