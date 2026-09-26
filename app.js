/**
 * NHÀ GA VÀNG - TOPWIN TRADING DASHBOARD
 * Dữ liệu đồng bộ trực tiếp từ Google Sheet: BẢNG LỢI NHUẬN FX NHÀ GA VÀNG - THÁNG 09/2026
 * URL: https://docs.google.com/spreadsheets/d/1h09Bsi5ND5LYp_tPNIJWgN0CkNOuNkh5/edit?pli=1&gid=246887206
 */

// 1. DỮ LIỆU ĐỒNG BỘ CHUẨN XÁC TỪ GOOGLE SHEET
const DEFAULT_WEEKS = [
  {
    id: 'week_2026_08_01',
    name: 'Tuần 1 Tháng 08 (12/08 - 14/08)',
    month: '08/2026',
    orders: [
      { id: 1, day: 'T4 (12/08/2026)', date: '12/08/2026', time: '10:00', pair: 'XAU', type: 'SELL', entry: '4418', exit: '4403', status: 'ĐÃ ĐẠT TP', pips: 150, note: 'Done', tf: 'M1' },
      { id: 2, day: 'T4 (12/08/2026)', date: '12/08/2026', time: '13:30', pair: 'XAU', type: 'BUY', entry: '4403', exit: '4418', status: 'ĐÃ ĐẠT TP', pips: 150, note: 'Done', tf: 'M1' },
      { id: 3, day: 'T4 (12/08/2026)', date: '12/08/2026', time: '16:45', pair: 'XAU', type: 'SELL', entry: '4418', exit: '4409', status: 'ĐÃ ĐẠT TP', pips: 90, note: 'Done', tf: 'M1' },
      { id: 4, day: 'T5 (13/08/2026)', date: '13/08/2026', time: '11:15', pair: 'XAU', type: 'BUY', entry: '4404', exit: '4397', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 5, day: 'T5 (13/08/2026)', date: '13/08/2026', time: '15:20', pair: 'XAU', type: 'BUY', entry: '4392', exit: '4402', status: 'ĐÃ ĐẠT TP', pips: 100, note: 'Done', tf: 'M1' },
      { id: 6, day: 'T6 (14/08/2026)', date: '14/08/2026', time: '09:40', pair: 'XAU', type: 'BUY', entry: '4313', exit: '4322', status: 'ĐÃ ĐẠT TP', pips: 90, note: 'Done', tf: 'M1' },
      { id: 7, day: 'T6 (14/08/2026)', date: '14/08/2026', time: '11:50', pair: 'XAU', type: 'SELL', entry: '4321', exit: '4314', status: 'ĐÃ ĐẠT TP', pips: 70, note: 'Done', tf: 'M1' },
      { id: 8, day: 'T6 (14/08/2026)', date: '14/08/2026', time: '14:10', pair: 'XAU', type: 'SELL', entry: '4329', exit: '4314', status: 'ĐÃ ĐẠT TP', pips: 150, note: 'Done', tf: 'M1' },
      { id: 9, day: 'T6 (14/08/2026)', date: '14/08/2026', time: '16:35', pair: 'XAU', type: 'SELL', entry: '4348', exit: '4355', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 10, day: 'T6 (14/08/2026)', date: '14/08/2026', time: '20:00', pair: 'XAU', type: 'SELL', entry: '4391', exit: '4385', status: 'ĐÃ ĐẠT TP', pips: 60, note: 'Done', tf: 'M1' }
    ]
  },
  {
    id: 'week_2026_08_02',
    name: 'Tuần 2 Tháng 08 (17/08 - 21/08)',
    month: '08/2026',
    orders: [
      { id: 1, day: 'T2 (17/08/2026)', date: '17/08/2026', time: '09:30', pair: 'XAU', type: 'BUY', entry: '4393', exit: '4408', status: 'ĐÃ ĐẠT TP', pips: 150, note: 'Done', tf: 'M1' },
      { id: 2, day: 'T2 (17/08/2026)', date: '17/08/2026', time: '13:15', pair: 'XAU', type: 'BUY', entry: '4393', exit: '4393', status: 'HÒA BE', pips: 0, note: 'Hòa BE', tf: 'M1' },
      { id: 3, day: 'T2 (17/08/2026)', date: '17/08/2026', time: '17:00', pair: 'XAU', type: 'SELL', entry: '4425', exit: '4420', status: 'ĐÃ ĐẠT TP', pips: 50, note: 'Done', tf: 'M1' },
      { id: 4, day: 'T3 (18/08/2026)', date: '18/08/2026', time: '10:20', pair: 'XAU', type: 'BUY', entry: '4400', exit: '4394', status: 'ĐÃ SL', pips: -60, note: 'Dính SL', tf: 'M1' },
      { id: 5, day: 'T3 (18/08/2026)', date: '18/08/2026', time: '14:45', pair: 'XAU', type: 'BUY', entry: '4391', exit: '4398', status: 'ĐÃ ĐẠT TP', pips: 70, note: 'Done', tf: 'M1' },
      { id: 6, day: 'T4 (19/08/2026)', date: '19/08/2026', time: '09:15', pair: 'XAU', type: 'SELL', entry: '4345', exit: '4335', status: 'ĐÃ ĐẠT TP', pips: 100, note: 'Done', tf: 'M1' },
      { id: 7, day: 'T4 (19/08/2026)', date: '19/08/2026', time: '11:30', pair: 'XAU', type: 'BUY', entry: '4352', exit: '4361', status: 'ĐÃ ĐẠT TP', pips: 90, note: 'Done', tf: 'M1' },
      { id: 8, day: 'T4 (19/08/2026)', date: '19/08/2026', time: '14:00', pair: 'XAU', type: 'SELL', entry: '4362', exit: '4357', status: 'ĐÃ ĐẠT TP', pips: 50, note: 'Done', tf: 'M1' },
      { id: 9, day: 'T4 (19/08/2026)', date: '19/08/2026', time: '16:20', pair: 'XAU', type: 'BUY', entry: '4362', exit: '4372', status: 'ĐÃ ĐẠT TP', pips: 100, note: 'Done', tf: 'M1' },
      { id: 10, day: 'T4 (19/08/2026)', date: '19/08/2026', time: '20:10', pair: 'XAU', type: 'SELL', entry: '4461', exit: '4468', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 11, day: 'T5 (20/08/2026)', date: '20/08/2026', time: '10:50', pair: 'XAU', type: 'BUY', entry: '4490', exit: '4483', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 12, day: 'T5 (20/08/2026)', date: '20/08/2026', time: '15:40', pair: 'XAU', type: 'BUY', entry: '4489', exit: '4482', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 13, day: 'T6 (21/08/2026)', date: '21/08/2026', time: '09:05', pair: 'XAU', type: 'BUY', entry: '4524', exit: '4517', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 14, day: 'T6 (21/08/2026)', date: '21/08/2026', time: '13:20', pair: 'XAU', type: 'SELL', entry: '4533', exit: '4540', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 15, day: 'T6 (21/08/2026)', date: '21/08/2026', time: '18:30', pair: 'XAU', type: 'SELL', entry: '4565', exit: '4572', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' }
    ]
  },
  {
    id: 'week_2026_08_03',
    name: 'Tuần 3 Tháng 08 (24/08 - 28/08)',
    month: '08/2026',
    orders: [
      { id: 1, day: 'T2 (24/08/2026)', date: '24/08/2026', time: '10:15', pair: 'XAU', type: 'BUY', entry: '4637', exit: '4634', status: 'ĐÃ SL', pips: -30, note: 'Dính SL', tf: 'M1' },
      { id: 2, day: 'T2 (24/08/2026)', date: '24/08/2026', time: '15:30', pair: 'XAU', type: 'SELL', entry: '4644', exit: '4633', status: 'ĐÃ ĐẠT TP', pips: 110, note: 'Done', tf: 'M1' },
      { id: 3, day: 'T3 (25/08/2026)', date: '25/08/2026', time: '09:20', pair: 'XAU', type: 'SELL', entry: '4643', exit: '4639', status: 'ĐÃ ĐẠT TP', pips: 40, note: 'Done', tf: 'M1' },
      { id: 4, day: 'T3 (25/08/2026)', date: '25/08/2026', time: '11:45', pair: 'XAU', type: 'SELL', entry: '4647', exit: '4647', status: 'HÒA BE', pips: 0, note: 'Hòa BE', tf: 'M1' },
      { id: 5, day: 'T3 (25/08/2026)', date: '25/08/2026', time: '14:10', pair: 'XAU', type: 'SELL', entry: '4653', exit: '4621', status: 'ĐÃ ĐẠT TP', pips: 320, note: 'Done', tf: 'M1' },
      { id: 6, day: 'T3 (25/08/2026)', date: '25/08/2026', time: '17:35', pair: 'XAU', type: 'SELL', entry: '4637', exit: '4628', status: 'ĐÃ ĐẠT TP', pips: 90, note: 'Done', tf: 'M1' },
      { id: 7, day: 'T4 (26/08/2026)', date: '26/08/2026', time: '10:00', pair: 'XAU', type: 'SELL', entry: '4668', exit: '4640', status: 'ĐÃ ĐẠT TP', pips: 280, note: 'Done', tf: 'M1' },
      { id: 8, day: 'T4 (26/08/2026)', date: '26/08/2026', time: '13:50', pair: 'XAU', type: 'BUY', entry: '4628', exit: '4638', status: 'ĐÃ ĐẠT TP', pips: 100, note: 'Done', tf: 'M1' },
      { id: 9, day: 'T4 (26/08/2026)', date: '26/08/2026', time: '18:20', pair: 'XAU', type: 'SELL', entry: '4623', exit: '4631', status: 'ĐÃ SL', pips: -80, note: 'Dính SL', tf: 'M1' },
      { id: 10, day: 'T5 (27/08/2026)', date: '27/08/2026', time: '11:10', pair: 'XAU', type: 'BUY', entry: '4624', exit: '4618', status: 'ĐÃ SL', pips: -60, note: 'Dính SL', tf: 'M1' },
      { id: 11, day: 'T5 (27/08/2026)', date: '27/08/2026', time: '16:00', pair: 'XAU', type: 'BUY', entry: '4600', exit: '4600', status: 'HÒA BE', pips: 0, note: 'Hòa BE', tf: 'M1' }
    ]
  },
  {
    id: 'week_2026_09_01',
    name: 'Tuần 1 Tháng 09 (31/08 - 04/09)',
    month: '09/2026',
    orders: [
      { id: 1, day: 'T2 (31/08/2026)', date: '31/08/2026', time: '09:30', pair: 'XAU', type: 'SELL', entry: '4452', exit: '4460', status: 'ĐÃ SL', pips: -80, note: 'Dính SL', tf: 'M1' },
      { id: 2, day: 'T3 (01/09/2026)', date: '01/09/2026', time: '10:15', pair: 'XAU', type: 'BUY', entry: '4430', exit: '4434', status: 'ĐÃ ĐẠT TP', pips: 40, note: 'Done', tf: 'M1' },
      { id: 3, day: 'T3 (01/09/2026)', date: '01/09/2026', time: '14:20', pair: 'XAU', type: 'BUY', entry: '4406', exit: '4401', status: 'ĐÃ SL', pips: -50, note: 'Dính SL', tf: 'M1' },
      { id: 4, day: 'T3 (01/09/2026)', date: '01/09/2026', time: '19:45', pair: 'XAU', type: 'BUY', entry: '4591', exit: '4585', status: 'ĐÃ SL', pips: -60, note: 'Dính SL', tf: 'M1' },
      { id: 5, day: 'T4 (02/09/2026)', date: '02/09/2026', time: '08:40', pair: 'XAU', type: 'SELL', entry: '4305', exit: '4312', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 6, day: 'T4 (02/09/2026)', date: '02/09/2026', time: '11:10', pair: 'XAU', type: 'SELL', entry: '4326', exit: '4316', status: 'ĐÃ ĐẠT TP', pips: 100, note: 'Done', tf: 'M1' },
      { id: 7, day: 'T4 (02/09/2026)', date: '02/09/2026', time: '16:30', pair: 'XAU', type: 'BUY', entry: '4303', exit: '4353', status: 'ĐÃ ĐẠT TP', pips: 500, note: 'Done', tf: 'M1' },
      { id: 8, day: 'T5 (03/09/2026)', date: '03/09/2026', time: '09:05', pair: 'XAU', type: 'SELL', entry: '4415', exit: '4420', status: 'ĐÃ SL', pips: -50, note: 'Dính SL', tf: 'M1' },
      { id: 9, day: 'T5 (03/09/2026)', date: '03/09/2026', time: '10:15', pair: 'XAU', type: 'SELL', entry: '4430', exit: '4427', status: 'ĐÃ ĐẠT TP', pips: 30, note: 'Done', tf: 'M1' },
      { id: 10, day: 'T5 (03/09/2026)', date: '03/09/2026', time: '11:50', pair: 'XAU', type: 'SELL', entry: '4431', exit: '4427', status: 'ĐÃ ĐẠT TP', pips: 40, note: 'Done', tf: 'M1' },
      { id: 11, day: 'T5 (03/09/2026)', date: '03/09/2026', time: '13:25', pair: 'XAU', type: 'SELL', entry: '4429', exit: '4426', status: 'ĐÃ ĐẠT TP', pips: 30, note: 'Done', tf: 'M1' },
      { id: 12, day: 'T5 (03/09/2026)', date: '03/09/2026', time: '15:10', pair: 'XAU', type: 'SELL', entry: '4439', exit: '4434', status: 'ĐÃ ĐẠT TP', pips: 50, note: 'Done', tf: 'M1' },
      { id: 13, day: 'T5 (03/09/2026)', date: '03/09/2026', time: '17:40', pair: 'XAU', type: 'SELL', entry: '4429', exit: '4426', status: 'ĐÃ ĐẠT TP', pips: 30, note: 'Done', tf: 'M1' },
      { id: 14, day: 'T5 (03/09/2026)', date: '03/09/2026', time: '20:15', pair: 'XAU', type: 'SELL', entry: '4439', exit: '4436', status: 'ĐÃ ĐẠT TP', pips: 30, note: 'Done', tf: 'M1' },
      { id: 15, day: 'T6 (04/09/2026)', date: '04/09/2026', time: '21:30', pair: 'XAU', type: 'SELL', entry: '4479', exit: '4409', status: 'ĐÃ ĐẠT TP', pips: 700, note: 'Done', tf: 'M1' }
    ]
  },
  {
    id: 'week_2026_09_02',
    name: 'Tuần 2 Tháng 09 (07/09 - 11/09)',
    month: '09/2026',
    orders: [
      { id: 1, day: 'T2 (07/09/2026)', date: '07/09/2026', time: '09:30', pair: 'XAU', type: 'SELL', entry: '4410', exit: '4387', status: 'ĐÃ ĐẠT TP', pips: 230, note: 'Done', tf: 'M1' },
      { id: 2, day: 'T2 (07/09/2026)', date: '07/09/2026', time: '14:20', pair: 'XAU', type: 'SELL', entry: '4395', exit: '4402', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 3, day: 'T2 (07/09/2026)', date: '07/09/2026', time: '19:45', pair: 'XAU', type: 'SELL', entry: '4406', exit: '4413', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 4, day: 'T3 (08/09/2026)', date: '08/09/2026', time: '10:15', pair: 'XAU', type: 'BUY', entry: '4408', exit: '4401', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 5, day: 'T4 (09/09/2026)', date: '09/09/2026', time: '09:10', pair: 'XAU', type: 'BUY', entry: '4374', exit: '4381', status: 'ĐÃ ĐẠT TP', pips: 70, note: 'Done', tf: 'M1' },
      { id: 6, day: 'T4 (09/09/2026)', date: '09/09/2026', time: '11:30', pair: 'XAU', type: 'BUY', entry: '4406', exit: '4404', status: 'ĐÃ SL', pips: -20, note: 'Dính SL', tf: 'M1' },
      { id: 7, day: 'T4 (09/09/2026)', date: '09/09/2026', time: '15:20', pair: 'XAU', type: 'BUY', entry: '4410', exit: '4425', status: 'ĐÃ ĐẠT TP', pips: 150, note: 'Done', tf: 'M1' },
      { id: 8, day: 'T4 (09/09/2026)', date: '09/09/2026', time: '20:15', pair: 'XAU', type: 'BUY', entry: '4408', exit: '4400', status: 'ĐÃ SL', pips: -80, note: 'Dính SL', tf: 'M1' },
      { id: 9, day: 'T5 (10/09/2026)', date: '10/09/2026', time: '09:05', pair: 'XAU', type: 'BUY', entry: '4406', exit: '4417', status: 'ĐÃ ĐẠT TP', pips: 110, note: 'Done', tf: 'M1' },
      { id: 10, day: 'T5 (10/09/2026)', date: '10/09/2026', time: '11:15', pair: 'XAU', type: 'BUY', entry: '4412', exit: '4428', status: 'ĐÃ ĐẠT TP', pips: 160, note: 'Done', tf: 'M1' },
      { id: 11, day: 'T5 (10/09/2026)', date: '10/09/2026', time: '14:30', pair: 'XAU', type: 'BUY', entry: '4430', exit: '4450', status: 'ĐÃ ĐẠT TP', pips: 200, note: 'Done', tf: 'M1' },
      { id: 12, day: 'T5 (10/09/2026)', date: '10/09/2026', time: '16:50', pair: 'XAU', type: 'BUY', entry: '4418', exit: '4428', status: 'ĐÃ ĐẠT TP', pips: 100, note: 'Done', tf: 'M1' },
      { id: 13, day: 'T5 (10/09/2026)', date: '10/09/2026', time: '19:20', pair: 'XAU', type: 'BUY', entry: '4397', exit: '4397', status: 'HÒA BE', pips: 0, note: 'Hòa BE', tf: 'M1' },
      { id: 14, day: 'T5 (10/09/2026)', date: '10/09/2026', time: '21:00', pair: 'XAU', type: 'BUY', entry: '4386', exit: '4380', status: 'ĐÃ SL', pips: -60, note: 'Dính SL', tf: 'M1' },
      { id: 15, day: 'T6 (11/09/2026)', date: '11/09/2026', time: '10:00', pair: 'XAU', type: 'BUY', entry: '4321', exit: '4334', status: 'ĐÃ ĐẠT TP', pips: 130, note: 'Done', tf: 'M1' },
      { id: 16, day: 'T6 (11/09/2026)', date: '11/09/2026', time: '14:40', pair: 'XAU', type: 'BUY', entry: '4315', exit: '4310', status: 'ĐÃ SL', pips: -50, note: 'Dính SL', tf: 'M1' },
      { id: 17, day: 'T6 (11/09/2026)', date: '11/09/2026', time: '20:30', pair: 'XAU', type: 'BUY', entry: '4429', exit: '4450', status: 'ĐÃ ĐẠT TP', pips: 210, note: 'Done', tf: 'M1' }
    ]
  },
  {
    id: 'week_2026_09_03',
    name: 'Tuần 3 Tháng 09 (14/09 - 18/09)',
    month: '09/2026',
    orders: [
      { id: 1, day: 'T2 (14/09/2026)', date: '14/09/2026', time: '09:15', pair: 'XAU', type: 'BUY LIMIT', entry: '4343', exit: '4338', status: 'ĐÃ SL', pips: -50, note: 'Dính SL', tf: 'M1' },
      { id: 2, day: 'T2 (14/09/2026)', date: '14/09/2026', time: '11:45', pair: 'XAU', type: 'SELL LIMIT', entry: '4335', exit: '4310', status: 'ĐÃ ĐẠT TP', pips: 250, note: 'Done', tf: 'M1' },
      { id: 3, day: 'T2 (14/09/2026)', date: '14/09/2026', time: '15:20', pair: 'XAU', type: 'SELL LIMIT', entry: '4334', exit: '4324', status: 'ĐÃ ĐẠT TP', pips: 100, note: 'Done', tf: 'M1' },
      { id: 4, day: 'T2 (14/09/2026)', date: '14/09/2026', time: '20:10', pair: 'XAU', type: 'BUY LIMIT', entry: '4282', exit: '4275', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 5, day: 'T3 (15/09/2026)', date: '15/09/2026', time: '10:30', pair: 'XAU', type: 'BUY LIMIT', entry: '4297', exit: '4290', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 6, day: 'T3 (15/09/2026)', date: '15/09/2026', time: '16:00', pair: 'XAU', type: 'SELL LIMIT', entry: '4284', exit: '4271', status: 'ĐÃ ĐẠT TP', pips: 130, note: 'Done', tf: 'M1' },
      { id: 7, day: 'T4 (16/09/2026)', date: '16/09/2026', time: '14:15', pair: 'XAU', type: 'BUY LIMIT', entry: '4325', exit: '4335', status: 'ĐÃ ĐẠT TP', pips: 100, note: 'Done', tf: 'M1' },
      { id: 8, day: 'T5 (17/09/2026)', date: '17/09/2026', time: '09:20', pair: 'XAU', type: 'SELL LIMIT', entry: '4315', exit: '4298', status: 'ĐÃ ĐẠT TP', pips: 170, note: 'Done', tf: 'M1' },
      { id: 9, day: 'T5 (17/09/2026)', date: '17/09/2026', time: '14:40', pair: 'XAU', type: 'SELL LIMIT', entry: '4286', exit: '4292', status: 'ĐÃ SL', pips: -60, note: 'Dính SL', tf: 'M1' },
      { id: 10, day: 'T5 (17/09/2026)', date: '17/09/2026', time: '19:30', pair: 'XAU', type: 'SELL LIMIT', entry: '4295', exit: '4283', status: 'ĐÃ ĐẠT TP', pips: 120, note: 'Done', tf: 'M1' },
      { id: 11, day: 'T6 (18/09/2026)', date: '18/09/2026', time: '08:50', pair: 'XAU', type: 'BUY LIMIT', entry: '4352', exit: '4346', status: 'ĐÃ SL', pips: -60, note: 'Dính SL', tf: 'M1' },
      { id: 12, day: 'T6 (18/09/2026)', date: '18/09/2026', time: '11:10', pair: 'XAU', type: 'SELL LIMIT', entry: '4350', exit: '4335', status: 'ĐÃ ĐẠT TP', pips: 150, note: 'Done', tf: 'M1' },
      { id: 13, day: 'T6 (18/09/2026)', date: '18/09/2026', time: '13:45', pair: 'XAU', type: 'BUY LIMIT', entry: '4353', exit: '4365', status: 'ĐÃ ĐẠT TP', pips: 120, note: 'Done', tf: 'M1' },
      { id: 14, day: 'T6 (18/09/2026)', date: '18/09/2026', time: '16:15', pair: 'XAU', type: 'SELL LIMIT', entry: '4375', exit: '4367', status: 'ĐÃ ĐẠT TP', pips: 80, note: 'Done', tf: 'M1' },
      { id: 15, day: 'T6 (18/09/2026)', date: '18/09/2026', time: '19:00', pair: 'XAU', type: 'BUY LIMIT', entry: '4373', exit: '4381', status: 'ĐÃ ĐẠT TP', pips: 80, note: 'Done', tf: 'M1' },
      { id: 16, day: 'T6 (18/09/2026)', date: '18/09/2026', time: '21:30', pair: 'XAU', type: 'SELL LIMIT', entry: '4376', exit: '4356', status: 'ĐÃ ĐẠT TP', pips: 200, note: 'Done', tf: 'M1' }
    ]
  },
  {
    id: 'week_2026_09_04',
    name: 'Tuần 4 Tháng 09 (21/09 - 25/09)',
    month: '09/2026',
    orders: [
      { id: 1, day: 'T2 (21/09/2026)', date: '21/09/2026', time: '09:00', pair: 'XAU', type: 'BUY', entry: '4357', exit: '4364', status: 'ĐÃ ĐẠT TP', pips: 70, note: 'Done (có dời SL hòa)', tf: 'M1' },
      { id: 2, day: 'T2 (21/09/2026)', date: '21/09/2026', time: '11:15', pair: 'XAU', type: 'BUY', entry: '4351', exit: '4349', status: 'ĐÃ SL', pips: -20, note: 'Dính SL', tf: 'M1' },
      { id: 3, day: 'T2 (21/09/2026)', date: '21/09/2026', time: '14:30', pair: 'XAU', type: 'BUY', entry: '4335', exit: '4343', status: 'ĐÃ ĐẠT TP', pips: 80, note: 'Done', tf: 'M1' },
      { id: 4, day: 'T2 (21/09/2026)', date: '21/09/2026', time: '16:45', pair: 'XAU', type: 'SELL', entry: '4347', exit: '4349', status: 'ĐÃ SL', pips: -20, note: 'Dính SL', tf: 'M1' },
      { id: 5, day: 'T3 (22/09/2026)', date: '22/09/2026', time: '09:10', pair: 'XAU', type: 'BUY', entry: '4351', exit: '4345', status: 'ĐÃ SL', pips: -60, note: 'Dính SL', tf: 'M1' },
      { id: 6, day: 'T3 (22/09/2026)', date: '22/09/2026', time: '11:20', pair: 'XAU', type: 'BUY', entry: '4318', exit: '4323', status: 'ĐÃ ĐẠT TP', pips: 50, note: 'Done (chốt sau về hòa)', tf: 'M1' },
      { id: 7, day: 'T3 (22/09/2026)', date: '22/09/2026', time: '13:40', pair: 'XAU', type: 'BUY', entry: '4303', exit: '4313', status: 'ĐÃ ĐẠT TP', pips: 100, note: 'Done', tf: 'M1' },
      { id: 8, day: 'T3 (22/09/2026)', date: '22/09/2026', time: '15:50', pair: 'XAU', type: 'BUY', entry: '4332', exit: '4342', status: 'ĐÃ ĐẠT TP', pips: 100, note: 'Done', tf: 'M1' },
      { id: 9, day: 'T3 (22/09/2026)', date: '22/09/2026', time: '19:15', pair: 'XAU', type: 'BUY', entry: '4327', exit: '4320', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 10, day: 'T4 (23/09/2026)', date: '23/09/2026', time: '10:30', pair: 'XAU', type: 'BUY', entry: '4348', exit: '4338', status: 'ĐÃ SL', pips: -100, note: 'Dính SL', tf: 'M1' },
      { id: 11, day: 'T4 (23/09/2026)', date: '23/09/2026', time: '14:20', pair: 'XAU', type: 'BUY', entry: '4318', exit: '4313', status: 'ĐÃ SL', pips: -50, note: 'Dính SL', tf: 'M1' },
      { id: 12, day: 'T5 (24/09/2026)', date: '24/09/2026', time: '10:15', pair: 'XAU', type: 'BUY', entry: '4274', exit: '4267', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 13, day: 'T6 (25/09/2026)', date: '25/09/2026', time: '09:00', pair: 'XAU', type: 'BUY', entry: '4278', exit: '4270', status: 'ĐÃ SL', pips: -80, note: 'Dính SL', tf: 'M1' },
      { id: 14, day: 'T6 (25/09/2026)', date: '25/09/2026', time: '11:30', pair: 'XAU', type: 'BUY', entry: '4291', exit: '4311', status: 'ĐÃ ĐẠT TP', pips: 200, note: 'Done', tf: 'M1' },
      { id: 15, day: 'T6 (25/09/2026)', date: '25/09/2026', time: '14:45', pair: 'XAU', type: 'BUY', entry: '4300', exit: '4293', status: 'ĐÃ SL', pips: -70, note: 'Dính SL', tf: 'M1' },
      { id: 16, day: 'T6 (25/09/2026)', date: '25/09/2026', time: '16:30', pair: 'XAU', type: 'SELL', entry: '4278', exit: '4278', status: 'HÒA BE', pips: 0, note: 'Chốt hoà', tf: 'M1' }
    ]
  }
];

const STORAGE_KEY = 'NHA_GA_VANG_DATA_7W_FULL';

// 2. STATE
let state = {
  weeks: [],
  currentWeekId: 'week_2026_09_04', // Mặc định mở Tuần 4 Tháng 9 mới nhất
  filterDay: 'ALL',
  filterStatus: 'ALL',
  filterType: 'ALL',
  searchQuery: ''
};

// 3. STORAGE
function loadData() {
  // Tự động dọn dẹp các cache dữ liệu cũ trước đó để nạp dữ liệu chuẩn mới
  [
    'NHA_GA_VANG_DATA_V1',
    'NHA_GA_VANG_DATA_V2',
    'NHA_GA_VANG_DATA_AUG_2026',
    'NHA_GA_VANG_DATA_AUG_2026_W2',
    'NHA_GA_VANG_DATA_AUG_2026_W3',
    'nhagavang_trades_v1',
    'NHA_GA_VANG_DATA_4W_FULL',
    'NHA_GA_VANG_DATA_5W_FULL',
    'NHA_GA_VANG_DATA_6W_FULL',
    'NHA_GA_VANG_DATA_6W_V2'
  ].forEach(k => {
    try { localStorage.removeItem(k); } catch (e) {}
  });

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      state.weeks = JSON.parse(stored);
    } catch (e) {
      state.weeks = JSON.parse(JSON.stringify(DEFAULT_WEEKS));
    }
  } else {
    state.weeks = JSON.parse(JSON.stringify(DEFAULT_WEEKS));
    saveData();
  }
  if (!state.weeks.find(w => w.id === state.currentWeekId)) {
    state.currentWeekId = state.weeks[state.weeks.length - 1]?.id || state.weeks[0]?.id || '';
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.weeks));
}

function getCurrentWeek() {
  return state.weeks.find(w => w.id === state.currentWeekId) || state.weeks[0];
}

// 4. BADGES
function getOrderTypeBadge(type) {
  const t = (type || '').trim().toUpperCase();
  if (t.includes('BUY')) {
    return `<span class="table-pill pill-buy">${t}</span>`;
  }
  if (t.includes('SELL')) {
    return `<span class="table-pill pill-sell">${t}</span>`;
  }
  return `<span class="table-pill bg-slate-800 text-slate-300 border border-slate-700">${t}</span>`;
}

function getStatusBadge(status) {
  const s = (status || '').trim().toUpperCase();
  if (s.includes('TP') || s.includes('ĐẠT TP')) {
    return '<span class="table-pill pill-status-tp">✓ ĐÃ ĐẠT TP</span>';
  }
  if (s.includes('SL')) {
    return '<span class="table-pill pill-status-sl">✗ ĐÃ SL</span>';
  }
  if (s.includes('BE') || s.includes('HÒA')) {
    return '<span class="table-pill pill-status-be">⟷ HÒA BE</span>';
  }
  return `<span class="table-pill bg-slate-800 text-slate-400">${status}</span>`;
}

// 5. RENDER TABLE (CĂN BẰNG NỘI DUNG GIỮA VÀ TRÊN DƯỚI)
function renderTable() {
  const week = getCurrentWeek();
  const tbody = document.getElementById('signalsTableBody');
  if (!tbody || !week) return;

  const filteredOrders = week.orders.filter(order => {
    if (state.filterDay !== 'ALL' && !order.day.includes(state.filterDay)) return false;
    if (state.filterStatus === 'TP' && !order.status.toUpperCase().includes('TP')) return false;
    if (state.filterStatus === 'SL' && !order.status.toUpperCase().includes('SL')) return false;
    if (state.filterStatus === 'BE' && !order.status.toUpperCase().includes('BE') && !order.status.toUpperCase().includes('HÒA')) return false;
    if (state.filterType === 'BUY' && !order.type.toUpperCase().includes('BUY')) return false;
    if (state.filterType === 'SELL' && !order.type.toUpperCase().includes('SELL')) return false;
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const match = (order.day || '').toLowerCase().includes(q) ||
                    (order.date || '').toLowerCase().includes(q) ||
                    (order.type || '').toLowerCase().includes(q) ||
                    (order.entry || '').includes(q) ||
                    (order.exit || '').includes(q);
      if (!match) return false;
    }
    return true;
  });

  if (filteredOrders.length === 0) {
    if (week.orders.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="9" class="text-center py-12 text-slate-400">
            <div class="text-2xl mb-2">📝</div>
            <p class="font-semibold text-white">Chưa có lệnh nào trong tuần này.</p>
          </td>
        </tr>`;
    } else {
      tbody.innerHTML = `<tr><td colspan="9" class="text-center py-10 text-slate-500">Không tìm thấy lệnh nào phù hợp với bộ lọc.</td></tr>`;
    }
    const totalEl = document.getElementById('tableTotalPips');
    if (totalEl) {
      totalEl.innerText = '0 PIPS';
      totalEl.className = 'pill-total-pips-win tabular-nums';
    }
    return;
  }

  let totalFilteredPips = 0;
  let html = '';

  filteredOrders.forEach((item, index) => {
    totalFilteredPips += Number(item.pips) || 0;
    const pipsNum = Number(item.pips) || 0;
    const isLoss = pipsNum < 0;
    const pipsFormatted = pipsNum > 0 ? `+${pipsNum}p` : `${pipsNum}p`;
    const pipsPillClass = pipsNum > 0 ? 'pill-pips-win' : (pipsNum < 0 ? 'pill-pips-loss' : 'pill-pips-be');
    
    html += `
      <tr class="${isLoss ? 'row-loss' : ''}">
        <td class="text-center">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 text-xs text-amber-400 font-bold tabular-nums">
            ${item.id || (index + 1)}
          </span>
        </td>
        <td class="text-center text-slate-200 font-semibold text-xs whitespace-nowrap">
          ${item.day || item.date}
        </td>
        <td class="text-center">
          <span class="table-pill pill-pair">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            ${item.pair || 'XAU/USD'}
          </span>
        </td>
        <td class="text-center">
          ${getOrderTypeBadge(item.type)}
        </td>
        <td class="text-center text-slate-100 font-bold text-xs sm:text-sm tabular-nums tracking-wide">
          ${item.entry}
        </td>
        <td class="text-center font-bold text-xs sm:text-sm tabular-nums tracking-wide ${isLoss ? 'text-rose-400' : 'text-emerald-400'}">
          ${item.exit}
        </td>
        <td class="text-center">
          ${getStatusBadge(item.status)}
        </td>
        <td class="text-center">
          <span class="table-pill ${pipsPillClass} tabular-nums">
            ${pipsFormatted}
          </span>
        </td>
        <td class="text-center">
          <span class="table-pill pill-note">${item.note || 'Done'}</span>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;

  const totalEl = document.getElementById('tableTotalPips');
  if (totalEl) {
    totalEl.innerText = `${totalFilteredPips > 0 ? '+' : ''}${totalFilteredPips.toLocaleString()} PIPS`;
    totalEl.className = totalFilteredPips >= 0 
      ? 'pill-total-pips-win tabular-nums' 
      : 'pill-total-pips-loss tabular-nums';
  }
}

// 6. STATS & KPIS
function updateStats() {
  const week = getCurrentWeek();
  if (!week) return;

  let totalPips = 0;
  let tpCount = 0;
  let slCount = 0;
  let beCount = 0;

  week.orders.forEach(o => {
    const p = Number(o.pips) || 0;
    totalPips += p;
    const s = (o.status || '').toUpperCase();
    if (s.includes('TP')) tpCount++;
    else if (s.includes('SL')) slCount++;
    else beCount++;
  });

  const totalOrders = week.orders.length;
  const winRate = totalOrders > 0 ? (((tpCount + beCount) / totalOrders) * 100).toFixed(1) : '0.0';

  document.getElementById('kpiTotalPips').innerText = `${totalPips > 0 ? '+' : ''}${totalPips.toLocaleString()}`;
  document.getElementById('kpiWinRate').innerText = `${winRate}%`;
  document.getElementById('kpiWinRateDetail').innerText = beCount > 0 ? `${tpCount} TP • ${beCount} Hòa • ${slCount} SL` : `${tpCount} TP • ${slCount} SL`;
  document.getElementById('kpiTotalTrades').innerText = `${totalOrders} Lệnh`;
  
  // Calculate average profit per trade
  const avgPips = totalOrders > 0 ? (totalPips / totalOrders).toFixed(1) : 0;
  const kpiAvgEl = document.getElementById('kpiAvgPips');
  if (kpiAvgEl) {
    kpiAvgEl.innerText = `${avgPips > 0 ? '+' : ''}${avgPips} p/lệnh`;
  }

  document.getElementById('currentWeekTitle').innerText = week.name;
}

// 7. ADMIN MANAGEMENT
function renderAdminOrdersList() {
  const week = getCurrentWeek();
  const list = document.getElementById('adminOrdersList');
  if (!list || !week) return;

  if (week.orders.length === 0) {
    list.innerHTML = `<div class="text-center py-8 text-slate-500 text-xs">Chưa có lệnh nào trong tuần này. Bấm "Thêm Lệnh Mới" để bắt đầu nhập.</div>`;
    return;
  }

  let html = '';
  week.orders.forEach((o, i) => {
    html += `
      <div class="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs gap-2">
        <div class="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span class="font-bold text-amber-400 tabular-nums">#${o.id || i+1}</span>
          <span class="text-slate-300 font-semibold">${o.day || o.date}</span>
          <span>${getOrderTypeBadge(o.type)}</span>
          <span class="text-slate-300 tabular-nums">Vào: <strong>${o.entry}</strong></span>
          <span class="text-slate-400 tabular-nums">Ra: <strong>${o.exit}</strong></span>
          <span>${getStatusBadge(o.status)}</span>
          <span class="font-bold tabular-nums ${o.pips > 0 ? 'text-emerald-400' : 'text-rose-400'}">${o.pips > 0 ? '+' : ''}${o.pips}p</span>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button onclick="editOrder(${o.id || i+1})" class="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-xs font-semibold">Sửa</button>
          <button onclick="deleteOrder(${o.id || i+1})" class="px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 text-xs font-semibold">Xóa</button>
        </div>
      </div>
    `;
  });
  list.innerHTML = html;
}

// ==========================================
// BẢO MẬT ADMIN & MÃ PIN (SOLUTION 1)
// ==========================================
const ADMIN_PIN_KEY = 'NGV_ADMIN_PIN';
const DEFAULT_PIN = '8888';

function getAdminPin() {
  return localStorage.getItem(ADMIN_PIN_KEY) || DEFAULT_PIN;
}

function setAdminPin(newPin) {
  if (newPin && newPin.length >= 4) {
    localStorage.setItem(ADMIN_PIN_KEY, newPin);
    return true;
  }
  return false;
}

let brandClickCount = 0;
let brandClickTimer = null;

// Bấm nhanh 3 lần vào logo tàu 🚂 để mở khóa Admin
window.handleBrandClick = function() {
  brandClickCount++;
  clearTimeout(brandClickTimer);
  brandClickTimer = setTimeout(() => {
    brandClickCount = 0;
  }, 1200);

  if (brandClickCount >= 3) {
    brandClickCount = 0;
    revealAdminButton(true);
  }
};

function revealAdminButton(autoOpenPin = false) {
  const adminBtn = document.getElementById('adminBtn');
  if (adminBtn) {
    adminBtn.classList.remove('hidden');
    adminBtn.classList.add('inline-flex');
  }
  if (autoOpenPin) {
    openAdminModal();
  }
}

window.openAdminModal = function() {
  // Nếu đã xác thực trong phiên này -> Mở luôn
  if (sessionStorage.getItem('NGV_ADMIN_AUTH') === 'true') {
    renderAdminOrdersList();
    document.getElementById('adminModal').classList.remove('hidden');
    return;
  }
  // Chưa xác thực -> Mở bảng nhập mã PIN
  document.getElementById('adminPinInput').value = '';
  document.getElementById('pinErrorMessage').classList.add('hidden');
  document.getElementById('adminPinModal').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('adminPinInput').focus();
  }, 100);
};

window.closeAdminModal = function() {
  document.getElementById('adminModal').classList.add('hidden');
};

window.closePinModal = function() {
  document.getElementById('adminPinModal').classList.add('hidden');
};

window.handlePinSubmit = function(e) {
  if (e) e.preventDefault();
  const inputPin = document.getElementById('adminPinInput').value.trim();
  const correctPin = getAdminPin();

  if (inputPin === correctPin) {
    sessionStorage.setItem('NGV_ADMIN_AUTH', 'true');
    document.getElementById('adminPinModal').classList.add('hidden');
    revealAdminButton(false);
    renderAdminOrdersList();
    document.getElementById('adminModal').classList.remove('hidden');
  } else {
    document.getElementById('pinErrorMessage').classList.remove('hidden');
    document.getElementById('adminPinInput').value = '';
    document.getElementById('adminPinInput').focus();
  }
};

window.changePinPrompt = function() {
  const currentPin = getAdminPin();
  const oldPin = prompt('Nhập mã PIN hiện tại (mặc định 8888):');
  if (oldPin !== currentPin) {
    alert('❌ Mã PIN hiện tại không đúng!');
    return;
  }
  const newPin = prompt('Nhập mã PIN mới (tối thiểu 4 số):');
  if (!newPin || newPin.trim().length < 4) {
    alert('❌ Mã PIN mới phải có ít nhất 4 ký tự!');
    return;
  }
  setAdminPin(newPin.trim());
  alert(`✅ Đổi mã PIN thành công! Mã PIN mới của bạn là: ${newPin.trim()}`);
};

window.lockAndHideAdmin = function() {
  sessionStorage.removeItem('NGV_ADMIN_AUTH');
  document.getElementById('adminModal').classList.add('hidden');
  const adminBtn = document.getElementById('adminBtn');
  if (adminBtn) {
    adminBtn.classList.add('hidden');
    adminBtn.classList.remove('inline-flex');
  }
  alert('🔒 Đã khóa và ẩn khu vực Quản Trị thành công!');
};

window.openAddOrderModal = function() {
  const week = getCurrentWeek();
  const nextId = week.orders.length > 0 ? Math.max(...week.orders.map(o => o.id || 0)) + 1 : 1;
  document.getElementById('orderFormId').value = '';
  document.getElementById('orderFormDisplayId').innerText = `#${nextId}`;
  
  // Format today's date DD/MM/YYYY
  const today = new Date();
  const d = String(today.getDate()).padStart(2, '0');
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const y = today.getFullYear();
  document.getElementById('orderFormDate').value = `${d}/${m}/${y}`;
  
  document.getElementById('orderFormType').value = 'BUY';
  document.getElementById('orderFormEntry').value = '4400';
  document.getElementById('orderFormExit').value = '4410';
  document.getElementById('orderFormStatus').value = 'ĐÃ ĐẠT TP';
  document.getElementById('orderFormPips').value = '100';
  document.getElementById('orderFormNote').value = 'Done';
  document.getElementById('orderFormTF').value = 'M1';

  document.getElementById('orderFormSubmitBtn').innerText = 'Thêm Lệnh Mới';
  document.getElementById('orderFormModal').classList.remove('hidden');
};

window.closeOrderFormModal = function() {
  document.getElementById('orderFormModal').classList.add('hidden');
};

window.editOrder = function(orderId) {
  const week = getCurrentWeek();
  const order = week.orders.find(o => o.id === orderId);
  if (!order) return;

  document.getElementById('orderFormId').value = order.id;
  document.getElementById('orderFormDisplayId').innerText = `#${order.id}`;
  document.getElementById('orderFormDate').value = order.date || order.day;
  document.getElementById('orderFormType').value = (order.type || '').toUpperCase();
  document.getElementById('orderFormEntry').value = order.entry;
  document.getElementById('orderFormExit').value = order.exit;
  document.getElementById('orderFormStatus').value = order.status;
  document.getElementById('orderFormPips').value = order.pips;
  document.getElementById('orderFormNote').value = order.note || 'Done';
  document.getElementById('orderFormTF').value = order.tf || 'M1';

  document.getElementById('orderFormSubmitBtn').innerText = 'Cập Nhật Lệnh';
  document.getElementById('orderFormModal').classList.remove('hidden');
};

window.deleteOrder = function(orderId) {
  if (!confirm(`Bạn có chắc muốn xóa lệnh #${orderId}?`)) return;
  const week = getCurrentWeek();
  week.orders = week.orders.filter(o => o.id !== orderId);
  saveData();
  renderAdminOrdersList();
  renderTable();
  updateStats();
};

window.addNewWeekPrompt = function() {
  const weekName = prompt('Nhập tên tuần mới (Ví dụ: Tuần 6 Tháng 10):');
  if (!weekName) return;
  const weekId = 'week_' + Date.now();
  state.weeks.push({
    id: weekId,
    name: weekName,
    month: '09/2026',
    orders: []
  });
  state.currentWeekId = weekId;
  saveData();
  
  const weekSelector = document.getElementById('weekSelector');
  if (weekSelector) {
    weekSelector.innerHTML = state.weeks.map(w => `<option value="${w.id}" ${w.id === state.currentWeekId ? 'selected' : ''}>${w.name}</option>`).join('');
  }
  renderTable();
  updateStats();
  renderAdminOrdersList();
};

window.resetToDefault = function() {
  if (!confirm('Bạn có chắc muốn khôi phục dữ liệu gốc chuẩn từ Google Sheet (Tuần 1 & Tuần 2)?')) return;
  state.weeks = JSON.parse(JSON.stringify(DEFAULT_WEEKS));
  state.currentWeekId = state.weeks[0].id;
  saveData();
  const weekSelector = document.getElementById('weekSelector');
  if (weekSelector) {
    weekSelector.innerHTML = state.weeks.map(w => `<option value="${w.id}" ${w.id === state.currentWeekId ? 'selected' : ''}>${w.name}</option>`).join('');
  }
  renderTable();
  updateStats();
  renderAdminOrdersList();
  alert('Đã khôi phục dữ liệu gốc từ Google Sheet thành công!');
};

// 8. MARKETING CARD
window.openMarketingModal = function() {
  const week = getCurrentWeek();
  let totalPips = 0;
  let tpCount = 0;
  let slCount = 0;
  let beCount = 0;

  week.orders.forEach(o => {
    totalPips += Number(o.pips) || 0;
    const s = (o.status || '').toUpperCase();
    if (s.includes('TP')) tpCount++;
    else if (s.includes('SL')) slCount++;
    else beCount++;
  });

  const totalOrders = week.orders.length;
  const winRate = totalOrders > 0 ? (((tpCount + beCount) / totalOrders) * 100).toFixed(1) : '0.0';

  document.getElementById('shareWeekTitle').innerText = week.name;
  document.getElementById('shareTotalPips').innerText = `${totalPips > 0 ? '+' : ''}${totalPips.toLocaleString()} PIPS`;
  document.getElementById('shareWinRate').innerText = `${winRate}%`;
  document.getElementById('shareTradesSummary').innerText = beCount > 0
    ? `${totalOrders} LỆNH (${tpCount} TP • ${beCount} Hòa • ${slCount} SL)`
    : `${totalOrders} LỆNH (${tpCount} TP • ${slCount} SL)`;

  const qrContainer = document.getElementById('shareQRCode');
  qrContainer.innerHTML = '';
  if (typeof QRCode !== 'undefined') {
    new QRCode(qrContainer, {
      text: 'https://t.me/nhagavang_signals',
      width: 80,
      height: 80,
      colorDark : '#000000',
      colorLight : '#ffffff',
      correctLevel : QRCode.CorrectLevel.H
    });
  }

  document.getElementById('marketingModal').classList.remove('hidden');
};

window.closeMarketingModal = function() {
  document.getElementById('marketingModal').classList.add('hidden');
};

window.downloadShareCard = function() {
  const card = document.getElementById('shareCardExport');
  const btn = document.getElementById('btnDownloadShareCard');
  btn.innerText = 'Đang xuất ảnh...';
  btn.disabled = true;

  html2canvas(card, {
    scale: 2,
    backgroundColor: '#06090e',
    useCORS: true
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = `NhaGaVang_${getCurrentWeek().id}_TongKet.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    btn.innerText = 'Tải Ảnh Thành Công!';
    setTimeout(() => {
      btn.innerText = 'Tải Ảnh Báo Cáo (PNG)';
      btn.disabled = false;
    }, 2000);
  }).catch(err => {
    console.error('Error rendering share card:', err);
    alert('Có lỗi khi tạo ảnh, vui lòng thử lại!');
    btn.innerText = 'Tải Ảnh Báo Cáo (PNG)';
    btn.disabled = false;
  });
};

// 9. LEGAL MODAL
window.openLegalModal = function() {
  const modal = document.getElementById('legalModal');
  if (modal) {
    modal.classList.remove('hidden');
    const scrollContainer = modal.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }
};

window.closeLegalModal = function() {
  const modal = document.getElementById('legalModal');
  if (modal) {
    modal.classList.add('hidden');
  }
};

// 10. HELPER DATE FORMAT
function formatDayString(dateStr) {
  const parts = (dateStr || '').split('/');
  if (parts.length === 3) {
    const d = parseInt(parts[0]);
    const m = parseInt(parts[1]);
    const y = parseInt(parts[2]);
    const dt = new Date(y, m - 1, d);
    const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const dow = days[dt.getDay()];
    return `${dow} (${dateStr})`;
  }
  return dateStr;
}

// 11. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  loadData();

  const weekSelector = document.getElementById('weekSelector');
  if (weekSelector) {
    weekSelector.innerHTML = state.weeks.map(w => `<option value="${w.id}" ${w.id === state.currentWeekId ? 'selected' : ''}>${w.name}</option>`).join('');
    weekSelector.addEventListener('change', (e) => {
      state.currentWeekId = e.target.value;
      renderTable();
      updateStats();
      renderAdminOrdersList();
    });
  }

  renderTable();
  updateStats();

  // Day Filter Buttons
  document.querySelectorAll('.filter-day-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-day-btn').forEach(b => {
        b.classList.remove('bg-amber-500/20', 'text-amber-300', 'border-amber-500/40');
        b.classList.add('text-slate-400');
      });
      btn.classList.remove('text-slate-400');
      btn.classList.add('bg-amber-500/20', 'text-amber-300', 'border-amber-500/40');
      state.filterDay = btn.dataset.day;
      renderTable();
    });
  });

  const filterStatusSelect = document.getElementById('filterStatus');
  if (filterStatusSelect) {
    filterStatusSelect.addEventListener('change', (e) => {
      state.filterStatus = e.target.value;
      renderTable();
    });
  }

  const filterTypeSelect = document.getElementById('filterType');
  if (filterTypeSelect) {
    filterTypeSelect.addEventListener('change', (e) => {
      state.filterType = e.target.value;
      renderTable();
    });
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderTable();
    });
  }

  // Order Form Submit
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const week = getCurrentWeek();
      const orderId = document.getElementById('orderFormId').value;
      const rawDate = document.getElementById('orderFormDate').value.trim();
      const formattedDay = formatDayString(rawDate);
      
      const orderData = {
        id: orderId ? parseInt(orderId) : (week.orders.length > 0 ? Math.max(...week.orders.map(o => o.id || 0)) + 1 : 1),
        day: formattedDay,
        date: rawDate,
        time: '10:00',
        pair: 'XAU',
        type: document.getElementById('orderFormType').value.toUpperCase(),
        entry: document.getElementById('orderFormEntry').value.trim(),
        exit: document.getElementById('orderFormExit').value.trim(),
        status: document.getElementById('orderFormStatus').value,
        pips: parseFloat(document.getElementById('orderFormPips').value) || 0,
        note: document.getElementById('orderFormNote').value.trim() || 'Done',
        tf: document.getElementById('orderFormTF').value
      };

      if (orderId) {
        const idx = week.orders.findIndex(o => o.id === parseInt(orderId));
        if (idx !== -1) week.orders[idx] = orderData;
      } else {
        week.orders.push(orderData);
      }

      saveData();
      renderTable();
      updateStats();
      renderAdminOrdersList();
      closeOrderFormModal();
    });
  }

  // Khởi tạo hiệu ứng logo 3D tương tác chuột
  init3DLogoInteractive();
});

// 12. 3D DYNAMIC LUXURY LOGO INTERACTION
function init3DLogoInteractive() {
  const container = document.querySelector('.logo-3d-container');
  if (!container) return;
  const card = container.querySelector('.logo-3d-card');
  if (!card) return;

  container.addEventListener('mouseenter', () => {
    card.style.animation = 'none'; // Dừng chuyển động idle khi người dùng tương tác
  });

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - (rect.width / 2);
    const y = e.clientY - rect.top - (rect.height / 2);

    // Tính toán góc nghiêng 3D chân thực (-16deg đến +16deg)
    const rotateX = -(y / (rect.height / 2)) * 16;
    const rotateY = (x / (rect.width / 2)) * 16;

    card.style.transform = `perspective(700px) rotateX(${rotateX.toFixed(1)}deg) rotateY(${rotateY.toFixed(1)}deg) scale3d(1.08, 1.08, 1.08) translateZ(10px)`;
    card.style.boxShadow = `
      ${-rotateY * 1.5}px ${rotateX * 1.5 + 10}px 25px -4px rgba(245, 158, 11, 0.55),
      0 0 20px rgba(251, 191, 36, 0.4),
      inset 0 1px 1px rgba(255, 255, 255, 0.6)
    `;
  });

  container.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(-3deg) translateZ(0px)';
    card.style.boxShadow = '';
    // Khôi phục nhịp chuyển động lơ lửng 3D mượt mà
    setTimeout(() => {
      card.style.animation = 'logo3dIdle 5s ease-in-out infinite';
    }, 250);
  });
}
