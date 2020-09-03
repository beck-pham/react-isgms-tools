export const NON_DISK_TICKETS = {
  labels: [
    'NetApp',
    'ZFSSA',
    'MapR',
    'Isilon',
    'Cisco',
    'Brocade',
    'SilverPeak',
    'Linux/Solaris',
    'Avere'
  ],
  datasets: [
    {
      data: [22, 0, 11, 2, 1, 1, 4, 0, 1],
      backgroundColor: [
        '#ffc107',
        '#2e7d32',
        '#03a9f4',
        '#ff5252',
        '#9575cd',
        '#b71c1c',
        '#78909c',
        '#1b5e20',
        '#6200ea'
      ]
    }
  ]
};

export const NETAPP_DISK_TICKETS = {
  labels: [
    '450GB',
    '600GB-10K SAS',
    '600GB-15K SAS',
    '900GB SAS',
    '1TB SATA',
    '1.2TB SAS',
    '1.8TB SAS',
    '2TB SATA'
  ],
  datasets: [
    {
      data: [4, 3727, 578, 14, 0, 1418, 3, 808],
      backgroundColor: [
        '#ffc107',
        '#2e7d32',
        '#03a9f4',
        '#ff5252',
        '#9575cd',
        '#b71c1c',
        '#78909c',
        '#1b5e20'
      ]
    }
  ]
};

export const ISILON_DISK_TICKETS = {
  labels: ['1.2TB SAS', '2TB SATA', '3TB SATA', '600GB-10K SAS'],
  datasets: [
    {
      data: [16, 15, 80, 350],
      backgroundColor: ['#ffc107', '#2e7d32', '#03a9f4', '#ff5252']
    }
  ]
};

export const MAPR_DISK_TICKETS = {
  labels: ['TOTAL'],
  datasets: [
    {
      data: [317],
      backgroundColor: ['#2e7d32']
    }
  ]
};
