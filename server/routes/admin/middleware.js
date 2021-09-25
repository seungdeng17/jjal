require('dotenv').config();

const Admin = require('../../model/admin');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);

const middleware = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const data = await client.verifyIdToken({
    idToken: token,
    audience: process.env.OAUTH_CLIENT_ID,
  });
  const { email, exp } = data.getPayload();

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(200).json({ resultCode: -1, data: '조회할 수 없는 관리자 정보' });

  const now = parseInt(new Date().getTime() / 1000);
  if (now > exp) return res.status(200).json({ resultCode: -1, data: '토큰 만료' });

  next();
};

module.exports = middleware;
