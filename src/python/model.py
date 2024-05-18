from sqlalchemy import Table, Column, Integer, Text, String, ForeignKey, TIMESTAMP, func
from sqlalchemy.orm import relationship
from .db import metadata

# Userテーブルの定義
users = Table(
    "User",
    metadata,
    Column("id", Integer, primary_key=True, autoincrement=True),
    Column("username", Text, nullable=False),
    Column("email", Text, nullable=False, unique=True),
    Column("blob_id", Text, nullable=False),
)

# Articleテーブルの定義
articles = Table(
"Article",
    metadata,
    Column("id", String, primary_key=True),
    Column("user_id", Integer, ForeignKey("User.id", ondelete="RESTRICT", onupdate="CASCADE"), nullable=False),
    Column("title", Text, nullable=False),
    Column("content", Text, nullable=False),
    Column("like_count", Integer, nullable=False),
    Column("created_at", TIMESTAMP(timezone=True), server_default=func.now(), nullable=False),
    Column("updated_at", TIMESTAMP(timezone=True), onupdate=func.now(), nullable=False),
)