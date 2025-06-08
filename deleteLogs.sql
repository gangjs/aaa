use maplestory51;
DELETE FROM iplog;
DELETE FROM gmlog;
DELETE FROM internlog;

UPDATE inventoryitems
SET GM_Log = ''
WHERE GM_Log LIKE '%아이템%';
