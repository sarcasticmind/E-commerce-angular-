IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220312124558_v1')
BEGIN
    CREATE TABLE [AccountUsers] (
        [User_id] int NOT NULL IDENTITY,
        [User_Email] nvarchar(max) NULL,
        [User_Password] nvarchar(max) NULL,
        [User_Name] nvarchar(max) NULL,
        CONSTRAINT [PK_AccountUsers] PRIMARY KEY ([User_id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220312124558_v1')
BEGIN
    CREATE TABLE [Products] (
        [id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NOT NULL,
        [Image] nvarchar(max) NOT NULL,
        [Price] int NOT NULL,
        CONSTRAINT [PK_Products] PRIMARY KEY ([id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220312124558_v1')
BEGIN
    CREATE TABLE [productOrders] (
        [id] int NOT NULL IDENTITY,
        [Quantity] int NULL,
        [Price] int NOT NULL,
        [Date] datetime2 NOT NULL,
        [Product_id] int NOT NULL,
        [user_id] int NOT NULL,
        CONSTRAINT [PK_productOrders] PRIMARY KEY ([id]),
        CONSTRAINT [FK_productOrders_AccountUsers_user_id] FOREIGN KEY ([user_id]) REFERENCES [AccountUsers] ([User_id]) ON DELETE CASCADE,
        CONSTRAINT [FK_productOrders_Products_Product_id] FOREIGN KEY ([Product_id]) REFERENCES [Products] ([id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220312124558_v1')
BEGIN
    CREATE INDEX [IX_productOrders_Product_id] ON [productOrders] ([Product_id]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220312124558_v1')
BEGIN
    CREATE INDEX [IX_productOrders_user_id] ON [productOrders] ([user_id]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220312124558_v1')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20220312124558_v1', N'5.0.13');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220313122803_v2')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20220313122803_v2', N'5.0.13');
END;
GO

COMMIT;
GO

